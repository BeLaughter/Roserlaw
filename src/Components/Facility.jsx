import React from "react";
import "./Facility.css";
import { BiSolidBusSchool } from "react-icons/bi";
import { PiSoccerBallFill } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
const Facility = () => {
  return (
    <div className="facility">
      <h2 className="text-center title">School Facilities</h2>
      <div className="flex-container">
        <div className="item1">
          <div class="facility-item">
            {/* <!-- Top Circle (Smaller) --> */}
            <div class="facility-icon position-relative">
              <span class="position-absolute start-0"></span>
              <span class="position-absolute end-0"></span>
              <BiSolidBusSchool className="fac-icon" />
            </div>

            {/* <!-- Bottom Circle (Bigger) --> */}
            <div class="facility-text">
              <h3>School Bus</h3>
              <p>
                {" "}
                Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                ipsum sit
              </p>
            </div>
          </div>
        </div>
        <div className="item2">
          <div class="facility-item">
            {/* <!-- Top Circle (Smaller) --> */}
            <div class="facility-icon position-relative">
              <span class="position-absolute start-0"></span>
              <span class="position-absolute end-0"></span>
              <PiSoccerBallFill className="fac-icon" />
            </div>

            {/* <!-- Bottom Circle (Bigger) --> */}
            <div class="facility-text">
              <h3>Play Ground</h3>
              <p>
                {" "}
                Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                ipsum sit
              </p>
            </div>
          </div>
        </div>
        <div className="item3">
          <div class="facility-item">
            {/* <!-- Top Circle (Smaller) --> */}
            <div class="facility-icon position-relative">
              <span class="position-absolute start-0"></span>
              <span class="position-absolute end-0"></span>
              <IoHomeOutline className="fac-icon" />
            </div>

            {/* <!-- Bottom Circle (Bigger) --> */}
            <div class="facility-text">
              <h3>Healthy Canteen</h3>
              <p>
                Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                ipsum sit
              </p>
            </div>
          </div>
        </div>
        <div className="item3">
          <div class="facility-item">
            {/* <!-- Top Circle (Smaller) --> */}
            <div class="facility-icon position-relative">
              <span class="position-absolute start-0"></span>
              <span class="position-absolute end-0"></span>
              <BsPersonWorkspace className="fac-icon" />
            </div>

            {/* <!-- Bottom Circle (Bigger) --> */}
            <div class="facility-text">
              <h3>Positive Learning</h3>
              <p>
                Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                ipsum sit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
