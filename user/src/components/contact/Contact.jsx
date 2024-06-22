import React, { useState } from "react";
import "./contact.scss";
import axios from "axios";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [errors, setErrors] = useState({ username: "", email: "", message: "" });
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "username") {
      value = value.replace(/[^a-zA-Z\s]/g, ""); 
    }

    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (contact.username.length < 3) {
      validationErrors.username = "Name must be at least 3 characters long";
    }
    if (contact.message.length < 10) {
      validationErrors.message = "Message must be at least 10 characters long";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setMessage(false);
    try {
      // await axios.post("http://localhost:3000/contact", {
        await axios.post("https://portfolio-zfj8.onrender.com/contact", {
        username: contact.username,
        email: contact.email,
        message: contact.message,
      });
      setContact({
        username: "",
        email: "",
        message: "",
      });
      setErrors({});
      setMessage(true);
    } catch (error) {
      if (error.response && error.response.data.error) {
        if (error.response.data.error.includes("Email id is already present")) {
          setErrors({ email: "Email id is already present" });
        } else {
          console.log(error.response.data.error);
        }
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/together.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit} action="POST">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Your name here"
            value={contact.username}
            onChange={handleInput}
            required
          />
          {errors.username && <span className="error">{errors.username}</span>}
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={contact.email}
            onChange={handleInput}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            value={contact.message}
            onChange={handleInput}
            required
          />
          {errors.message && <span className="error">{errors.message}</span>}
          <button type="submit">Send</button>
          {message && <span>Thanks: I'll reply ASAP</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
