import React from "react";
import "./Aboutus.css";
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
            <img
              className="avatar"
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="User 2"
            />
            <p>
              Joe Rogan <br></br> Director
            </p>
          </div>
        </div>
      </div>
      <div className="flex4">
        <div className="circle-container">
          {/* Big Circle */}
          <div className="circle big-circle">
            <img
              src="https://cdn.pixabay.com/photo/2018/02/07/18/30/group-3137670_1280.jpg"
              alt="Big Circle"
            />
          </div>

          {/* Small Left Circle */}
          <div className="circle small-circle left">
            <img
              src="https://cdn.pixabay.com/photo/2017/09/02/10/31/learn-2706897_640.jpg"
              alt="Left Circle"
            />
          </div>

          {/* Small Right Circle */}
          <div className="circle small-circle right">
            <img
              src="https://cdn.pixabay.com/photo/2021/10/07/15/24/park-6688951_640.jpg"
              alt="Right Circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
