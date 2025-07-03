// src/components/Contact/Contact.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import axios from 'axios'; // Import Axios for making HTTP requests
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '', // Matches the 'course' field expected by your backend
    date: '',
    message: '', // Optional message field
  });

  // State for displaying success or error messages
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Handler for input changes to update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser form submission

    // Clear previous messages
    setSubmissionMessage('');
    setIsError(false);

    try {
      // Send a POST request to your backend's demo-register endpoint
      // Ensure the URL matches your backend server's address and port
      const response = await axios.post('http://localhost:5000/api/demo', formData);

      // On successful submission
      setSubmissionMessage(response.data.message || 'Request submitted successfully!');
      setIsError(false);

      // Clear the form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: '',
        date: '',
        message: '',
      });
    } catch (error) {
      // On error during submission
      console.error('Demo registration submission failed:', error);
      const errorMessage =
        error.response?.data?.message || 'Failed to submit request. Please try again.';
      setSubmissionMessage(errorMessage);
      setIsError(true);
    }
  };

  return (
    <section className="registration-section">
      <div className="container">

        {/* Left Side - Registration Form */}
        <div className="form-container">
          <div className="form-card">
            <h2>Get a <span>Free</span> Registration.</h2>
            <p>Fill the form to get your free demo session</p>

            {/* Display submission message */}
            {submissionMessage && (
              <p className={isError ? "error-message" : "success-message"}>
                {submissionMessage}
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name" // Important: `name` attribute maps to state key and backend field
                placeholder="Your Name"
                value={formData.name} // Controlled component: value tied to state
                onChange={handleChange} // Update state on change
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <select
                name="course" // Matches backend 'course' field
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select Course</option>
                <option value="Ethical Hacking">Ethical Hacking</option>
                <option value="Python Programming">Python Programming</option>
                <option value="Data Science">Data Science</option>
                {/* Add more course options as per your offerings */}
              </select>
              <input
                type="date"
                name="date" // Matches backend 'date' field
                value={formData.date}
                onChange={handleChange}
                required
              />
              <textarea
                name="message" // Matches backend 'message' field (optional)
                placeholder="Message (Optional)"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">SUBMIT REQUEST</button>
            </form>
          </div>
        </div>

        {/* Right Side - About Content (unchanged) */}
        <div className="content-container">
          <h5>SHORT ABOUT US</h5> {/* Corrected typo from "SORT" to "SHORT" */}
          <h1>We are <span>Best Course in Bhilai</span> </h1>
          <p className="subtitle">
            Revolutionize life worldwide through cutting-edge innovation, advanced technology, and interdisciplinary education, setting new benchmarks for excellence in every field.
          </p>
          <p className="description">
            Kian Technologies is dedicated to shaping future cybersecurity experts through advanced training in ethical hacking, penetration testing, and network security. We provide hands-on experience with the latest tools and techniques, guided by industry professionals. Our mission is to empower students to protect the digital world with cutting-edge skills and knowledge.
          </p>
          <ul>
            <li>Versatile and skilled management professionals</li>
            <li>We Connect Learners To The Best Universities From Around The World</li>
            <li>Our Mission: Increasing Global Access To Quality Education</li>
            <li>International affiliations with leading proprietary’s like, EC-Council, Comptia etc</li>
          </ul>
          <div className="buttons">
            {/* Using Link from react-router-dom for internal navigation */}
            <Link to="/about" className="btn about">ABOUT US</Link>
            <Link to="/contact" className="btn contact">CONTACT US</Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;