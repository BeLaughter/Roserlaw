import React from "react";
import "./Pop.css";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import san from "../assets/san.jpg";
import teacher1 from "../assets/teacher1.png";

const Pop = () => {
  return (
    <div className="pop">
      <h1 className="text-dark title text-center"> Our Teachers</h1>
      <p className="text-center">
        Our teachers create a vibrant, engaging, and supportive educational
        experience that empowers students to excel academically and personally.
      </p>
      <div className="flex-con">
        {/* Teacher 1 */}
        <div className="oval">
          <div className="big-cir">
            <img className="bigc-img" src={teacher1} alt="Teacher" />
            <div className="small-cir">
              <h3 className="text-dark ">Mrs Lawal</h3>
              <h4 className="text-dark">Teacher</h4>
              <span className="flex">
                <a href="#" target="blank">
                  <FaInstagram className="icons" />
                </a>
                <a href="#" target="blank">
                  <FaWhatsapp className="icons" />
                </a>
                <a href="#" target="blank">
                  <FaLinkedin className="icons" />
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Teacher 2 */}
        <div className="oval">
          <div className="big-cir">
            <img className="bigc-img" src={san} alt="Teacher" />
            <div className="small-cir">
              <h3 className="text-dark ">Mr Sanusi</h3>
              <h4 className="text-dark">Head Master</h4>
              <span className="flex">
                <a href="#" target="blank">
                  <FaInstagram className="icons" />
                </a>
                <a href="#" target="blank">
                  <FaWhatsapp className="icons" />
                </a>
                <a href="#" target="blank">
                  <FaLinkedin className="icons" />
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Teacher 3 */}
        <div className="oval">
          <div className="big-cir">
            <img
              className="bigc-img"
              src="https://cdn.pixabay.com/photo/2022/08/11/08/08/student-7378905_640.jpg"
              alt="Teacher"
            />
            <div className="small-cir">
              <h3 className="text-dark ">Mrs Adebanjo</h3>
              <h4 className="text-dark">Teacher</h4>
              <span className="flex">
                <a href="#" target="blank">
                  <FaInstagram className="icons" />
                </a>
                <a href="#" target="blank">
                  <FaWhatsapp className="icons" />
                </a>
                <a href="#" target="blank">
                  <FaLinkedin className="icons" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pop;
