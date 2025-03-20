// import { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
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
import child1 from "../assets/child1.jpg";
import child2 from "../assets/child2.jpg";
import child3 from "../assets/child3.jpg";
import child4 from "../assets/child4.jpg";
import child5 from "../assets/child5.jpg";
import child6 from "../assets/child6.jpg";
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
          <Link to="/gallery">
            <h4>Photo Gallery</h4>
          </Link>
          <ul>
            <li>
              <div className="flen">
                <img
                  src={child1}
                  alt="Testimonial Image"
                  className="gallery-img"
                />
                <img
                  src={child2}
                  alt="Testimonial Image"
                  className="gallery-img"
                />
                <img
                  src={child3}
                  alt="Testimonial Image"
                  className="gallery-img"
                />
              </div>
            </li>
            <li>
              <div className="flen">
                <img
                  src={child4}
                  alt="Testimonial Image"
                  className="gallery-img"
                />
                <img
                  src={child5}
                  alt="Testimonial Image"
                  className="gallery-img"
                />
                <img
                  src={child6}
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
