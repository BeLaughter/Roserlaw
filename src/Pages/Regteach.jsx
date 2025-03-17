import React, { useState } from "react";
import { db } from "../firebase"; // Import Firestore, but NOT auth
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

const Regteach = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    experience: "",
    password: "", // Storing password is not secure! Consider hashing it.
  });

  const handleChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting:", teacher); // Debugging step

      // Save teacher data in Firestore WITHOUT Authentication
      await addDoc(collection(db, "teachers"), {
        name: teacher.name,
        email: teacher.email,
        phone: teacher.phone,
        subject: teacher.subject,
        experience: teacher.experience,
        password: teacher.password, // ⚠️ Not recommended to store raw passwords
      });

      alert("Teacher registered successfully!");

      // Reset form
      setTeacher({
        name: "",
        email: "",
        phone: "",
        subject: "",
        experience: "",
        password: "",
      });
    } catch (error) {
      console.error("Error:", error.message);
      alert("Error saving data: " + error.message);
    }
  };

  return (
    <div className="regteach">
      <div className="signindiv">
        <h2 className="title text-center text-dark">Register as a Teacher</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            className="input-reg"
            placeholder="Full Name"
            value={teacher.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-reg"
            value={teacher.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="input-reg"
            value={teacher.phone}
            onChange={handleChange}
            required
          />

          <label>Subject of Expertise:</label>
          <select
            name="subject"
            className="input-reg"
            value={teacher.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select Subject</option>
            <option value="math">Mathematics</option>
            <option value="science">Science</option>
            <option value="english">English</option>
            <option value="history">History</option>
            <option value="other">Other</option>
          </select>

          <label>Years of Experience:</label>
          <input
            type="number"
            name="experience"
            className="input-reg"
            min="0"
            value={teacher.experience}
            onChange={handleChange}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-reg"
            value={teacher.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn teach-btn">
            Register
          </button>
          <p className="text-center ptop">
            Return to home <a href="/">HOME</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Regteach;
