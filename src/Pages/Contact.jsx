import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { db } from "../firebase"; // Import Firebase config
import { collection, addDoc } from "firebase/firestore";
import "../Components/Contact.css";
import Map from "../Components/Map";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), formData);
      alert("Thank you for reaching out! We will get back to you soon.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Error sending message: ", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact">
      <h1 className="text-dark title text-center">Get In Touch</h1>
      <p className="text-center">
        Have questions or need more information? Fill out the form below, and
        we’ll get back to you!
      </p>
      <div className="flexc">
        <div className="text-center">
          <FaLocationDot className="icons text-success" />
          <p className="text-bold">121, Apebi street Ijebu-ode, Ogun State</p>
        </div>
        <div className="text-center">
          <IoCall className="icons text-success" />
          <p className="text-bold">+234 813 939 6554</p>
        </div>
        <div className="text-center">
          <IoIosMail className="icons text-success" />
          <p className="text-bold">Roserlaw@gmail.com</p>
        </div>
      </div>

      <div className="flex-contain">
        <div className="flex1">
          <p>
            We're here to help! Reach out to us for inquiries about admissions,
            programs, or any assistance you may need.
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="flex-container">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                className="input1"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input2"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-container">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="input1"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input2"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="input5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn teach-btn">
              Send Message
            </button>
            <p className="text-center ptop">
              Return to home <a href="/">HOME</a>
            </p>
          </form>
        </div>
        <div className="flex2">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
