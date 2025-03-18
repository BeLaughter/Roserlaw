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
      <Studentdash />
      <h4>More school updates will be sent here...</h4>
    </div>
  );
};

export default Dashboard;
