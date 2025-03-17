import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState(""); // New state for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password state
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await register(email, password, name); // Pass name to register function
      navigate("/login"); // Redirect after successful registration
    } catch (err) {
      setError(err.message); // Show detailed Firebase error
    }
  };

  return (
    <div className="register-container">
      <div className="signindiv">
        <h2 className="text-center title text-dark">Register</h2>
        {error && <p className="error text-danger">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            className="input-reg"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="input-reg"
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            className="input-reg"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn teach-btn">
            Register
          </button>
        </form>
        <p className="text-center ptop">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <p className="text-center ptop">
          Return to home <a href="/">HOME</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
