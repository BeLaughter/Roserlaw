import React, { useEffect, useState } from "react";
import { useAuth } from "../../src/AuthContext"; // Authentication Context
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { db } from "../../src/firebase";
import { doc, getDoc } from "firebase/firestore";
import {
  FaBook,
  FaUser,
  FaSignOutAlt,
  FaBell,
  FaClipboardList,
  FaChartLine,
  FaMoneyBillWave,
  FaRegCalendarAlt,
  FaCogs,
} from "react-icons/fa";
import "./Studentdash.css"; // Import CSS

const Studentdash = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchStudentData(user.uid);
    }
  }, [user]);

  const fetchStudentData = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        setStudentData(userDoc.data());
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="signindiv2">
        <nav className="sidebar">
          <h2 className="text-center title">📚 Student Dashboard</h2>
          <ul className="text-center">
            <Link to="/update" className="btn teach-btn">
              <FaUser />
              Update Profile
            </Link>
            <Link className="btn teach-btn">
              <FaBook /> My Courses
            </Link>
            <Link className="btn teach-btn">
              <FaClipboardList /> Assignments
            </Link>
            <Link className="btn teach-btn">
              <FaChartLine /> Exam Results
            </Link>
            <Link className="btn teach-btn">
              <FaBell /> Notifications
            </Link>
            <Link className="btn teach-btn">
              <FaRegCalendarAlt /> Attendance
            </Link>
            <Link className="btn teach-btn">
              <FaMoneyBillWave /> Fees & Payments
            </Link>
            <Link className="btn teach-btn">
              <FaCogs /> Settings
            </Link>
            <Link onClick={handleLogout} className="btn teach-btn">
              <FaSignOutAlt /> Logout
            </Link>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <main className="dashboard-main">
        <header>
          <h2 className="title text-dark">
            Welcome, {studentData?.name || "Student"} 🎉
          </h2>
          <p>Track your courses, assignments, and more!</p>
        </header>
        {/* 🔥 Profile Section */}
        <div className="profile-info">
          {studentData?.passportURL ? (
            <img
              src={studentData.passportURL}
              alt="Profile"
              className="profile-pic"
            />
          ) : (
            <p>No profile picture</p>
          )}
          <h3>{studentData?.name || user?.email || "Student"}</h3>
          <p>Class: {studentData?.class || "Not set"}</p>
          <p>Age: {studentData?.age || "Not set"}</p>
          <p>Phone: {studentData?.phone || "Not set"}</p>
          <p>Address: {studentData?.address || "Not set"}</p>
        </div>
        {/* Quick Stats Section */}
        <div className="dashboard-cards">
          <div className="card">
            <FaBook className="icon" />
            <h3>3 Enrolled Courses</h3>
          </div>
          <div className="card">
            <FaClipboardList className="icon" />
            <h3>5 Pending Assignments</h3>
          </div>
          <div className="card">
            <FaChartLine className="icon" />
            <h3>85% Overall Grade</h3>
          </div>
          <div className="card">
            <FaBell className="icon" />
            <h3>2 New Notifications</h3>
          </div>
        </div>

        {/* Notifications Section */}
        <section className="notifications">
          <h2>📢 Recent Notifications</h2>
          <ul>
            <li>✔ Your Math assignment has been graded.</li>
            <li>📅 School event on March 25 - Don't miss it!</li>
            <li>💰 Tuition fees are due next week.</li>
          </ul>
        </section>

        {/* Assignments Section */}
        <section className="assignments">
          <h2>📄 Upcoming Assignments</h2>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Assignment</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mathematics</td>
                <td>Algebra Homework</td>
                <td>March 20</td>
              </tr>
              <tr>
                <td>Science</td>
                <td>Physics Quiz</td>
                <td>March 25</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Studentdash;
