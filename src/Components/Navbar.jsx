import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowRight, FaBookOpenReader } from "react-icons/fa6";
function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Event listener for adding and removing fixed class to navbar
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
      <div className="container-fluid">
        <h1 className="navbar-brand">
          <FaBookOpenReader className="bk-icon" />
          Roserlaw
        </h1>
        <button
          className="navbar-toggler bg hiddenonlap"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/" className="nav-link active" aria-current="page">
              <li className="nav-item">Home</li>
            </Link>
            <Link to="/about" className="nav-link">
              <li className="nav-item">About Us</li>
            </Link>
            <Link to="/class" className="nav-link">
              <li className="nav-item">Classes</li>
            </Link>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link to="/page" className="nav-link dropdown-toggle">
                Pages
              </Link>
              {dropdownOpen && (
                <ul className="dropdown-menu show">
                  <li>
                    <Link to="/page/1" className="dropdown-item">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="/page/2" className="dropdown-item">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="/page/3" className="dropdown-item">
                      3
                    </Link>
                  </li>
                  <li>
                    <Link to="/page/4" className="dropdown-item">
                      4
                    </Link>
                  </li>
                  <li>
                    <Link to="/page/5" className="dropdown-item">
                      5
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <Link to="/contact" className="nav-link">
              <li className="nav-item">Contact Us</li>
            </Link>
            <li className="nav-item">
              <a className="btn hiddenonmobile navbar-btn">
                Join Us <FaArrowRight className="icon" />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
