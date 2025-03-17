import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // ✅ Show loading while checking auth state
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
