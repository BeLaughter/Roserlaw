import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { MdCelebration } from "react-icons/md";
const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/"); // Redirect to home after logout
  };

  return (
    <div className="dashboard">
      <h2 className="text-center title text-dark">Dashboard</h2>
      <h3>
        Welcome <MdCelebration className="celeb" />, {currentUser?.email}
      </h3>
      {/* Other dashboard features */}
      <h4>student dashboard new school updates will be sent here later...</h4>
      <button onClick={handleLogout} className="btn navbar-btn">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
