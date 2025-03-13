import React from "react";
import "./Appoint.css";
const Appoint = () => {
  return (
    <div className="appoint flex-contain">
      <div className="flex1">
        <h2 className="title text-dark">Make Appointment</h2>
        <div className="flex-container">
          <input type="text" placeholder="Guardian Name" className="input1" />
          <input
            type="email"
            name="email"
            placeholder="Guardian Email"
            className="input2"
          />
        </div>
        <div className="flex-container">
          <input type="text" placeholder="Child Name" className="input3" />
          <input type="email" placeholder="Child Age" className="input4" />
        </div>
        <input type="text" placeholder="Message" className="input5" />

        <button type="submit" className=" btn teach-btn">
          Submit
        </button>
      </div>
      <div className="flex2">
        <div className="image-text-container">
          <img
            className="teach-img img-fluid "
            src="https://cdn.pixabay.com/photo/2018/07/08/08/45/abc-3523453_640.jpg"
            alt="teacher"
          />
        </div>
      </div>
    </div>
  );
};

export default Appoint;
