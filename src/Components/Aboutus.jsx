import React, { useState } from "react";
import "./Aboutus.css";
import director2 from "../assets/director2.jpg";
import child1 from "../assets/child1.jpg";
import child2 from "../assets/child2.jpg";
import child3 from "../assets/child3.jpg";

const Aboutus = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex-container aboutus" id="learn">
      <div className="flex1">
        <h2 className="title text-dark">
          Learn More About Our Work And Our Cultural Activities
        </h2>
        <p>
          We take pride in our dedicated teachers, modern facilities, and
          engaging programs that encourage students to explore their interests,
          develop critical thinking skills, and become responsible global
          citizens. Our mission is to provide a nurturing environment where
          students can thrive academically, socially, and emotionally.
        </p>
        {isExpanded && (
          <p>
            Whether it's through our innovative curriculum, cultural events, or
            community outreach initiatives, we strive to create a dynamic
            learning experience that prepares students for future success. Our
            programs are designed to inspire creativity, collaboration, and a
            lifelong passion for learning. We believe in holistic education,
            where students not only excel in academics but also develop strong
            character, leadership skills, and a sense of responsibility toward
            society. Our extracurricular activities, mentorship programs, and
            hands-on learning experiences ensure that every student is equipped
            with the necessary skills to navigate the challenges of the future
            with confidence and resilience.
          </p>
        )}
        <div className="flex-container">
          <button
            className="btn about-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
          <div className="flex av">
            <img className="avatar" src={director2} alt="User 2" />
            <p>
              Mrs Benson <br /> Managing Director
            </p>
          </div>
        </div>
      </div>
      <div className="flex4">
        <div className="circle-container">
          <div className="circle big-circle">
            <img src={child1} alt="Big Circle" />
          </div>
          <div className="circle small-circle left">
            <img src={child2} alt="Left Circle" />
          </div>
          <div className="circle small-circle right">
            <img src={child3} alt="Right Circle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
