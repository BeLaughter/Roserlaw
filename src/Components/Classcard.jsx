import React from "react";
import "./Classes.css";

const Classcard = (props) => {
  return (
    <div>
      <div className="class-con">
        <div className="class-circle">
          <img src={props.img} alt="class-image" className="class-img" />
        </div>
        <div className="rectangle">
          <h3 className="text-center  mt-4">{props.title}</h3>
          <div className="jt">
            <div className="flex av2">
              <img className="avatar" src={props.cimg} alt="User 2" />
              <p>
                {props.classteacher} <br /> Teacher
              </p>
            </div>
            <a href="#" className="btn btn-info clbtn">
              {props.fees}
            </a>
          </div>
          <div className="flex jt">
            <div className="age">
              <p>
                Age:<br></br>
                {props.age}
              </p>
            </div>
            <div className="time">
              <p>
                Time:<br></br>
                {props.time}
              </p>
            </div>
            <div className="capacity">
              <p>
                Capacity:<br></br>
                {props.capacity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classcard;
