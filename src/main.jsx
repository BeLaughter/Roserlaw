import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      {/* ✅ Wrap AuthProvider here */}
      <BrowserRouter>
        {" "}
        {/* ✅ Only one Router */}
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
