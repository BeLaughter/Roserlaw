import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { MdCelebration } from "react-icons/md";
import Studentdash from "../Components/Studentdash";
const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/"); // Redirect to home after logout
  };

  return (
    <div className="dashboard">
      <h2 className="text-center title text-dark">Dashboard</h2>

      <Studentdash />
      <h4>More school updates will be sent here...</h4>
    </div>
  );
};

export default Dashboard;
