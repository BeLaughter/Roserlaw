import React from "react";
import "./Pop.css";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

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
            <img
              className="bigc-img"
              src="https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_640.jpg"
              alt="Teacher"
            />
            <div className="small-cir">
              <h3 className="text-dark ">Mrs Lawal</h3>
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
            <img
              className="bigc-img"
              src="https://cdn.pixabay.com/photo/2016/03/02/10/37/allrounder-1232063_640.jpg"
              alt="Teacher"
            />
            <div className="small-cir">
              <h3 className="text-dark ">Mr Daniel</h3>
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
