import React from "react";
import Classcard from "./Classcard";
import "./Classes.css";
import kid from "../assets/kid.jpg";
import che from "../assets/che.jpg";
const Classes = () => {
  return (
    <div className="classes" id="classes">
      <h1 className="text-dark title text-center">School Classes</h1>
      <p className="text-center">
        Our classes empowers students to excel academically and personally.
      </p>
      <div className="flex-con">
        <Classcard
          img={kid}
          title="Primary1"
          cimg={che}
          classteacher="Mr Adekunle"
          fees="#50000"
          age="4-6 years"
          time="7:00am-3:00pm"
          capacity="100pupils"
        />
        <Classcard
          img={kid}
          title="Primary2"
          cimg={che}
          classteacher="Mr Adejobi"
          fees="#60000"
          age="5-7 years"
          time="7:00am-3:00pm"
          capacity="100pupils"
        />
        <Classcard
          img={kid}
          title="Primary3"
          cimg={che}
          classteacher="Mr Adelaja"
          fees="#65000"
          age="6-8 years"
          time="7:00am-3:00pm"
          capacity="100pupils"
        />
      </div>
      <div className="flex-con">
        <Classcard
          img={kid}
          title="Primary4"
          cimg={che}
          classteacher="Mr Olabisi"
          fees="#75000"
          age="7-9 years"
          time="7:00am-3:00pm"
          capacity="100pupils"
        />
        <Classcard
          img={kid}
          title="Primary5"
          cimg={che}
          classteacher="Mr Adeleke"
          fees="#85000"
          age="8-10 years"
          time="7:00am-3:00pm"
          capacity="100pupils"
        />
        <Classcard
          img={kid}
          title="Primary6"
          cimg={che}
          classteacher="Mr Samson"
          fees="#100000"
          age="9-11 years"
          time="7:00am-3:00pm"
          capacity="100pupils"
        />
      </div>
    </div>
  );
};

export default Classes;
