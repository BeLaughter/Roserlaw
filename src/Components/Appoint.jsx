import React, { useState } from "react";
import { db } from "../firebase"; // Import Firestore database
import { collection, addDoc } from "firebase/firestore";
import "./Appoint.css";

const Appoint = () => {
  const [appointment, setAppointment] = useState({
    guardianName: "",
    guardianEmail: "",
    guardianPhone: "",
    guardianSecondPhone: "",
    childName: "",
    childAge: "",
    message: "",
  });

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add appointment data to Firestore
      const docRef = await addDoc(collection(db, "appointments"), appointment);
      console.log("Appointment saved with ID:", docRef.id);
      alert("Appointment booked successfully!");

      // Clear form fields
      setAppointment({
        guardianName: "",
        guardianEmail: "",
        guardianPhone: "",
        guardianSecondPhone: "",
        childName: "",
        childAge: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving appointment:", error);
      alert("Failed to book appointment");
    }
  };

  return (
    <div className="appoint flex-contain">
      <div className="flex1">
        <h2 className="title text-dark">Make Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex-container">
            <input
              type="text"
              name="guardianName"
              placeholder="Guardian Name"
              className="input1"
              value={appointment.guardianName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="guardianEmail"
              placeholder="Guardian Email"
              className="input2"
              value={appointment.guardianEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex-container">
            <input
              type="text"
              name="guardianPhone"
              placeholder="Guardian Phone Number"
              className="input3"
              value={appointment.guardianPhone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="guardianSecondPhone"
              placeholder="Guardian Second Phone Number"
              className="input4"
              value={appointment.guardianSecondPhone}
              onChange={handleChange}
            />
          </div>
          <div className="flex-container">
            <input
              type="text"
              name="childName"
              placeholder="Child Name"
              className="input3"
              value={appointment.childName}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="childAge"
              placeholder="Child Age"
              className="input4"
              value={appointment.childAge}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="message"
            placeholder="Message"
            className="input5"
            value={appointment.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn teach-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="flex2">
        <div className="image-text-container">
          <img
            className="teach-img img-fluid"
            src="https://cdn.pixabay.com/photo/2018/07/08/08/45/abc-3523453_640.jpg"
            alt="teacher"
          />
        </div>
      </div>
    </div>
  );
};

export default Appoint;
