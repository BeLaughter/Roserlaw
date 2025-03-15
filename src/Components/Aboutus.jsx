import React from "react";
import "./Aboutus.css";
// import director from "../assets/director.jpg";
import director2 from "../assets/director2.jpg";
import child1 from "../assets/child1.jpg";
import child2 from "../assets/child2.jpg";
import child3 from "../assets/child3.jpg";
const Aboutus = () => {
  return (
    <div className="flex-container aboutus">
      <div className="flex1">
        <h2 className="title text-dark">
          Learn More About Our Work And Our Cultural Activities
        </h2>
        <p>
          We take pride in our dedicated teachers, modern facilities, and
          engaging programs that encourage students to explore their interests,
          develop critical thinking skills, and become responsible global
          citizens. Whether it's through our innovative curriculum, cultural
          events, or community outreach initiatives, we strive to create a
          dynamic learning experience that prepares students for future success.
        </p>
        <div className="flex-container">
          <a className="btn about-btn ">Read More</a>
          <div className="flex av">
            <img className="avatar" src={director2} alt="User 2" />
            <p>
              Mrs Benson <br></br> Managing Director
            </p>
          </div>
        </div>
      </div>
      <div className="flex4">
        <div className="circle-container">
          {/* Big Circle */}
          <div className="circle big-circle">
            <img src={child1} alt="Big Circle" />
          </div>

          {/* Small Left Circle */}
          <div className="circle small-circle left">
            <img src={child2} alt="Left Circle" />
          </div>

          {/* Small Right Circle */}
          <div className="circle small-circle right">
            <img src={child3} alt="Right Circle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
