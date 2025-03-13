import React, { useState } from "react";

const Regteach = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    subject: "",
    password: "",
  });

  const handleChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/teachers/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(teacher),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Teacher registered successfully!");
        setTeacher({ name: "", email: "", subject: "", password: "" }); // Clear form
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register teacher");
    }
  };

  return (
    <div className="regteach">
      <h2 className="title text-center text-dark">Register as a Teacher</h2>
      <form onSubmit={handleSubmit}>
        <label for="subject">Full Name:</label>
        <input
          type="text"
          name="name"
          className="input-reg"
          placeholder="Full Name"
          value={teacher.name}
          onChange={handleChange}
          required
        />
        <label for="subject">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-reg"
          value={teacher.email}
          onChange={handleChange}
          required
        />
        <label for="subject">Subject of Expertise:</label>
        <select id="subject" name="subject" className="input-reg" required>
          <option value="math">Mathematics</option>
          <option value="science">Science</option>
          <option value="english">English</option>
          <option value="history">History</option>
          <option value="other">Other</option>
        </select>

        <label for="experience">Years of Experience:</label>
        <input
          type="number"
          id="experience"
          name="experience"
          className="input-reg"
          min="0"
          required
        ></input>

        <button type="submit" className=" btn teach-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Regteach;
