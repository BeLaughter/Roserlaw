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

  useEffect(() => {
    if (user) {
      setStudentName(user.displayName || "Student"); // Get the display name if available
    }
  }, [user]);

  const handleLogout = async () => {
    await logout();
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="signindiv">
        <nav className="sidebar">
          <h2 className="text-center title text-dark">📚 Student Dashboard</h2>
          <div className="text-center">
            <a className="btn teach-btn">
              <FaUser /> Profile
            </a>
            <a className="btn teach-btn">
              <FaBook /> My Courses
            </a>
            <a className="btn teach-btn">
              <FaClipboardList /> Assignments
            </a>
            <a className="btn teach-btn">
              <FaChartLine /> Exam Results
            </a>
            <a className="btn teach-btn">
              <FaBell /> Notifications
            </a>
            <a className="btn teach-btn">
              <FaRegCalendarAlt /> Attendance
            </a>
            <a className="btn teach-btn">
              <FaMoneyBillWave /> Fees & Payments
            </a>
            <a className="btn teach-btn">
              <FaCogs /> Settings
            </a>
            <a onClick={handleLogout} className="btn teach-btn">
              <FaSignOutAlt /> Logout
            </a>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <main className="dashboard-main">
        <header>
          <h3> Welcome,{user?.displayName || user?.email} 🎉</h3>
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
