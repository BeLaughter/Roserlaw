// import { useState } from "react";
import "./Footer.css";
import {
  FaPhone,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaFacebookSquare,
  FaMailBulk,
  FaThumbsUp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
function Footer() {
  return (
    <div className="footer">
      <div className="flex-container6">
        <div className="flex-item">
          <h4>Get In Touch</h4>
          <ul>
            <li>
              <FaLocationDot className="iconsz" />
              121, Apebi street, Ijebu-ode, Ogun State
            </li>
            <li>
              <IoCall className="iconsz" />
              +2348130936554
            </li>
            <li>
              <IoIosMail className="iconsz" />
              Roserlaw@gmail.com
            </li>
            <li>
              {" "}
              <div className="mid-foot">
                <a href="#" target="blank">
                  <FaInstagram className="icons" />
                </a>
                <a href="#" target="blank">
                  <FaWhatsapp className="icons" />
                </a>
                <a href="#" target="blank">
                  <FaLinkedin className="icons" />
                </a>
                <a href="#" target="blank">
                  <FaFacebookSquare className="icons" />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex-item">
          <h4>Information</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Our Services</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="flex-item">
          <h4>Photo Gallery</h4>
          <ul>
            <li>
              <div className="flen">
                <img
                  src="https://cdn.pixabay.com/photo/2021/03/08/20/14/child-6080185_640.jpg"
                  alt="Testimonial Image"
                  className="gallery-img"
                />
                <img
                  src="https://cdn.pixabay.com/photo/2023/03/16/16/20/little-girl-7857049_640.jpg"
                  alt="Testimonial Image"
                  className="gallery-img"
                />
              </div>
            </li>
            <li>
              <div className="flen">
                <img
                  src="https://cdn.pixabay.com/photo/2014/04/05/11/39/read-316507_640.jpg"
                  alt="Testimonial Image"
                  className="gallery-img"
                />
                <img
                  src="https://cdn.pixabay.com/photo/2019/08/08/14/46/indian-holiday-4393133_640.jpg"
                  alt="Testimonial Image"
                  className="gallery-img"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="flex-item">
          <h4>Newsletter</h4>
          <p>Sign up today for the latest news and updates.</p>
          <input
            type="text"
            placeholder="Enter your E-mail"
            className="input-sub"
            required
          />
          <input type="submit" value="Subscribe" className="input-sub2" />
        </div>
      </div>
      <hr></hr>
      <div className="flex-container6">
        <p>121 S. Apebi St. Ijebu-ode,Ogun State</p>
        <p>© ROSERLAW 2025. All Rights Reserved. Design by BlackFire</p>
      </div>
    </div>
  );
}

export default Footer;
