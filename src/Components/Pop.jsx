import React, { useState } from "react";
import "./Pop.css";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import san from "../assets/san.jpg";

const Pop = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="pop">
      <h1 className="text-dark title text-center">Our Teachers</h1>
      <p className="text-center">
        Our teachers create a vibrant, engaging, and supportive educational
        experience that empowers students to excel academically and personally.
      </p>

      {/* Main Teachers */}
      <div className="flex-con">
        <div className="oval">
          <div className="big-cir">
            <img
              className="bigc-img"
              src="https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_640.jpg"
              alt="Teacher"
            />
            <div className="small-cir">
              <h3 className="text-dark">Mrs Lawal</h3>
              <h4 className="text-dark">Teacher</h4>
              <span className="flex">
                <a href="#" target="_blank">
                  <FaInstagram className="icons" />
                </a>
                <a href="#" target="_blank">
                  <FaWhatsapp className="icons" />
                </a>
                <a href="#" target="_blank">
                  <FaLinkedin className="icons" />
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="oval">
          <div className="big-cir">
            <img className="bigc-img" src={san} alt="Teacher" />
            <div className="small-cir">
              <h3 className="text-dark">Mr Sanusi</h3>
              <h4 className="text-dark">Head Master</h4>
              <span className="flex">
                <a href="#" target="_blank">
                  <FaInstagram className="icons" />
                </a>
                <a href="#" target="_blank">
                  <FaWhatsapp className="icons" />
                </a>
                <a href="#" target="_blank">
                  <FaLinkedin className="icons" />
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="oval">
          <div className="big-cir">
            <img
              className="bigc-img"
              src="https://cdn.pixabay.com/photo/2022/08/11/08/08/student-7378905_640.jpg"
              alt="Teacher"
            />
            <div className="small-cir">
              <h3 className="text-dark">Mrs Adebanjo</h3>
              <h4 className="text-dark">Teacher</h4>
              <span className="flex">
                <a href="#" target="_blank">
                  <FaInstagram className="icons" />
                </a>
                <a href="#" target="_blank">
                  <FaWhatsapp className="icons" />
                </a>
                <a href="#" target="_blank">
                  <FaLinkedin className="icons" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional teachers shown on toggle */}
      {showMore && (
        <>
          {/* First Sub Teachers */}
          <div className="flex-con">
            <div className="oval">
              <div className="big-cir">
                <img
                  className="bigc-img"
                  src="https://cdn.pixabay.com/photo/2017/09/26/13/50/teacher-2785901_640.jpg"
                  alt="Teacher"
                />
                <div className="small-cir">
                  <h3 className="text-dark">Mr Samson</h3>
                  <h4 className="text-dark">Senior Teacher</h4>
                </div>
              </div>
            </div>

            <div className="oval">
              <div className="big-cir">
                <img
                  className="bigc-img"
                  src="https://cdn.pixabay.com/photo/2016/03/27/20/57/man-1281562_640.jpg"
                  alt="Teacher"
                />
                <div className="small-cir">
                  <h3 className="text-dark">Mr Williams</h3>
                  <h4 className="text-dark">Science Teacher</h4>
                </div>
              </div>
            </div>

            <div className="oval">
              <div className="big-cir">
                <img
                  className="bigc-img"
                  src="https://cdn.pixabay.com/photo/2018/01/15/21/24/woman-3083377_640.jpg"
                  alt="Teacher"
                />
                <div className="small-cir">
                  <h3 className="text-dark">Ms Bello</h3>
                  <h4 className="text-dark">English Teacher</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Second Sub Teachers */}
          <div className="flex-con">
            <div className="oval">
              <div className="big-cir">
                <img
                  className="bigc-img"
                  src="https://cdn.pixabay.com/photo/2021/10/16/20/04/teacher-6715480_640.jpg"
                  alt="Teacher"
                />
                <div className="small-cir">
                  <h3 className="text-dark">Ms Adebayo</h3>
                  <h4 className="text-dark">Math Teacher</h4>
                </div>
              </div>
            </div>

            <div className="oval">
              <div className="big-cir">
                <img
                  className="bigc-img"
                  src="https://cdn.pixabay.com/photo/2015/07/02/10/22/men-828432_640.jpg"
                  alt="Teacher"
                />
                <div className="small-cir">
                  <h3 className="text-dark">Mr Kelvin</h3>
                  <h4 className="text-dark">History Teacher</h4>
                </div>
              </div>
            </div>

            <div className="oval">
              <div className="big-cir">
                <img
                  className="bigc-img"
                  src="https://cdn.pixabay.com/photo/2016/11/29/06/17/woman-1868817_640.jpg"
                  alt="Teacher"
                />
                <div className="small-cir">
                  <h3 className="text-dark">Mrs Joyce</h3>
                  <h4 className="text-dark">Geography Teacher</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Third Sub Teachers */}
          <div className="flex-con">
            <div className="oval">
              <div className="big-cir">
                <img
                  className="bigc-img"
                  src="https://cdn.pixabay.com/photo/2016/11/29/09/08/woman-1868817_640.jpg"
                  alt="Teacher"
                />
                <div className="small-cir">
                  <h3 className="text-dark">Mrs Esther</h3>
                  <h4 className="text-dark">Biology Teacher</h4>
                </div>
              </div>
            </div>

            <div className="oval">
              <div className="big-cir">
                <img
                  className="bigc-img"
                  src="https://cdn.pixabay.com/photo/2017/01/31/14/52/teacher-2023743_640.jpg"
                  alt="Teacher"
                />
                <div className="small-cir">
                  <h3 className="text-dark">Mr Okafor</h3>
                  <h4 className="text-dark">Physics Teacher</h4>
                </div>
              </div>
            </div>

            <div className="oval">
              <div className="big-cir">
                <img
                  className="bigc-img"
                  src="https://cdn.pixabay.com/photo/2015/07/02/10/21/men-828432_640.jpg"
                  alt="Teacher"
                />
                <div className="small-cir">
                  <h3 className="text-dark">Mr Ahmed</h3>
                  <h4 className="text-dark">Chemistry Teacher</h4>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Toggle Button */}
      <div className="text-center">
        <button
          className="btn toggle-btn navbar-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "View Less Teachers" : "View More Teachers"}
        </button>
      </div>
    </div>
  );
};

export default Pop;
