import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Import Public Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Class from "./Pages/Class";
import Page from "./Pages/Page";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Regteach from "./Pages/Regteach";
import Register from "./Pages/Register";
import Mistake from "./Pages/Mistake";
// Import Auth & Private Pages
import PrivateRoute from "./PrivateRoute";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Update from "./Components/Update";
function App() {
  // Initialize AOS animations
  useEffect(() => {
    Aos.init();
  }, []);

  // Function to scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add/remove display class to button when scrolled past 50% viewport height
  useEffect(() => {
    const handleScroll = () => {
      const btntop = document.querySelector(".b2top");
      if (btntop) {
        let scrollThreshold = window.innerHeight / 2;

        if (window.scrollY > scrollThreshold) {
          btntop.classList.add("display-btn");
        } else {
          btntop.classList.remove("display-btn");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll to Top Button */}
      <div className="b2top">
        <a href="#totop" onClick={scrollToTop}>
          ^
        </a>
      </div>

      <Navbar />

      {/* Public Routes (Accessible to Everyone) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/class" element={<Class />} />
        <Route path="/page" element={<Page />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/regteach" element={<Regteach />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Mistake />} /> {/* Catch-all 404 route */}
        {/* Private Routes (Only for Logged-In Users) */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/update"
          element={
            <PrivateRoute>
              <Update />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
