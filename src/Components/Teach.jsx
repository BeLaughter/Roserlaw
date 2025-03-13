import React from "react";
import "./Teach.css";
import { FaArrowRight } from "react-icons/fa6";

const Teach = () => {
  return (
    <div className="teach">
      <div className="flex-container">
        <div className="flex1">
          <div className="image-text-container">
            <img
              className="teach-img img-fluid "
              src="https://cdn.pixabay.com/photo/2020/01/03/01/18/welcome-4737158_640.jpg"
              alt="teacher"
            />
          </div>
        </div>
        <div className="flex2">
          <h2 className="title text-dark">Become A Teacher</h2>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <a className="btn teach-btn ">
            Get Started Now <FaArrowRight className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Teach;
