import React from "react";
import { Link } from "react-router-dom";

const Mistake = () => {
  return (
    <div className="text-center mt-5 mb-5">
      <div class="tv-container">
        <div class="tv-screen">
          <div class="static"></div>
          <div class="error-text">ERROR</div>
        </div>
        <div class="tv-stand"></div>
      </div>
      <h1 className="text-dark title mt-4">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
};

export default Mistake;
