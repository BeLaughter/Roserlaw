import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore"; // ✅ Import Firestore methods
import { auth, db } from "../firebase"; // ✅ Ensure you import `db` (Firestore)

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // 🔥 Reload user to get the latest email verification status
      await user.reload();

      if (!user.emailVerified) {
        setError("Email not verified. Please check your inbox.");
        return; // ✅ Stops further execution instead of signing out
      }

      // ✅ Update Firestore to reflect email is verified (only if it was previously false)
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, { emailVerified: true });

      // ✅ Redirect after successful login
      navigate("/dashboard");
    } catch (err) {
      console.error("Login Error:", err.code, err.message); // ✅ Logs the exact Firebase error
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many failed attempts. Please try again later.");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    }
  };

  return (
    <div className="loggin">
      <div className="signindiv">
        <h2 className="text-center title text-dark">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="input-reg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-reg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn teach-btn">
            Login
          </button>
        </form>
        <p className="text-center ptop">
          Don't have an account? <Link to="/register">Register Now</Link>
        </p>
        <p className="text-center ptop">
          Return to home <Link to="/">HOME</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
