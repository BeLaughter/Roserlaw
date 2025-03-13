import React from "react";
import "./Testi.css";
import { FaQuoteLeft } from "react-icons/fa";
const Testicard = (props) => {
  return (
    <div className="testicard">
      <FaQuoteLeft className="icons" />
      <p className="ptest">"{props.testimony}"</p>
      <div className="flex">
        <img src={props.img} alt="Testimonial Image" className="parent-img" />
        <div className="flex-column">
          <p>PARENT: {props.name}</p>
          <p>OCCUPATION: {props.occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default Testicard;
