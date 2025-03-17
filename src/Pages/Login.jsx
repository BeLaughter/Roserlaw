import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect to private page after login
    } catch (err) {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="loggin">
      <h2 className="text-center title text-dark">Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
        Return to home <a href="/">HOME</a>
      </p>
    </div>
  );
};

export default Login;
