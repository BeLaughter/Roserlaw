import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS is loaded
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowRight, FaBookOpenReader } from "react-icons/fa6";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false); // Track navbar open/close

  // Toggle Navbar
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Close Navbar when clicking a link
  const closeNavbar = () => {
    setNavbarOpen(false);
  };
  //Event listener for addiing and removing fixed class to navbar
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let sticky = navbar.offsetTop;

    if (window.scrollY > sticky) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-warning bg">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Brand */}
        <h1 className="navbar-brand me-auto">
          <FaBookOpenReader className="bk-icon" />
          Roserlaw
        </h1>

        {/* Navbar Toggle Button */}
        <button
          className="navbar-toggler btn"
          type="button"
          onClick={toggleNavbar} // Handle navbar open/close manually
          aria-expanded={navbarOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeNavbar}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/class" className="nav-link" onClick={closeNavbar}>
                Classes
              </Link>
            </li>

            {/* Dropdown Menu */}
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Pages
              </Link>
              {dropdownOpen && (
                <ul className="dropdown-menu show">
                  <li>
                    <a
                      href="/page/1"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      School Facilities
                    </a>
                  </li>
                  <li>
                    <a
                      href="/page/2"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      Popular Teachers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/page/3"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      Become A Teacher
                    </a>
                  </li>
                  <li>
                    <a
                      href="/page/4"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      Make Appointment
                    </a>
                  </li>
                  <li>
                    <a
                      href="/page/5"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      Testimonial
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={closeNavbar}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item hiddenonlap">
              <Link to="/login" className="nav-link" onClick={closeNavbar}>
                Login
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/login">
          <button className="btn navbar-btn hiddenonmobile mr">Login</button>
        </Link>

        {/* Join Us Button */}
        <Link to="/contact" className="btn hiddenonmobile navbar-btn ms-auto">
          Join Us <FaArrowRight className="icon" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
