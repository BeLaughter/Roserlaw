import React from "react";
import "./Testi.css";
const Testicard = (props) => {
  return (
    <div className="testicard">
      <p>{props.testimony}</p>
      <div className="flex">
        <img src={props.image} alt="Testimonial Image" />
        <div className="flex-column">
          <p>{props.name}</p>
          <p>{props.occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default Testicard;
