import React from "react";
import "./Teach.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
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
            Are you passionate about shaping young minds and making a difference
            in the world of education? At Roserlaw, we are always looking for
            dedicated and inspiring teachers who are committed to fostering a
            love for learning.<br></br>Join us and be a part of a team that
            empowers students to reach their full potential. If you have the
            skills, passion, and dedication to educate and inspire, we would
            love to hear from you!
          </p>
          <Link to="/regteach" className="btn teach-btn ">
            Get Started Now <FaArrowRight className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teach;
