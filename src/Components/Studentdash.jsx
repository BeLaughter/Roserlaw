import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext"; // Import Authentication Context
import { useNavigate } from "react-router-dom";
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
import "./Studentdash.css"; // Import CSS for styling

const Studentdash = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState("Student");

  useEffect(() => {
    if (user) {
      setStudentName(user.displayName || user.email || "Student"); // Update student name
    }
  }, [user]);

  const handleLogout = async () => {
    await logout();
    navigate("/register"); // Redirect to home after logout
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="signindiv2">
        <nav className="sidebar">
          <h2 className="text-center title">📚 Student Dashboard</h2>
          <ul className="text-center">
            <li className="btn teach-btn">
              <FaUser /> Profile
            </li>
            <li className="btn teach-btn">
              <FaBook /> My Courses
            </li>
            <li className="btn teach-btn">
              <FaClipboardList /> Assignments
            </li>
            <li className="btn teach-btn">
              <FaChartLine /> Exam Results
            </li>
            <li className="btn teach-btn">
              <FaBell /> Notifications
            </li>
            <li className="btn teach-btn">
              <FaRegCalendarAlt /> Attendance
            </li>
            <li className="btn teach-btn">
              <FaMoneyBillWave /> Fees & Payments
            </li>
            <li className="btn teach-btn">
              <FaCogs /> Settings
            </li>
            <li onClick={handleLogout} className="btn teach-btn">
              <FaSignOutAlt /> Logout now
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <main className="dashboard-main">
        <header>
          <h2 className="title text-dark">Welcome, {studentName} 🎉</h2>
          <p>Track your courses, assignments, and more!</p>
        </header>

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
