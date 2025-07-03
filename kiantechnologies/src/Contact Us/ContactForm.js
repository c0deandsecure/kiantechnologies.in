import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './ContactForm.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // State for displaying success or error messages
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default browser form submission

    // Clear previous messages
    setSubmissionMessage('');
    setIsError(false);

    try {
      // Data to send to the backend.
      // 'course' and 'date' are omitted as they are not part of this specific form.
      // The backend controller will handle them gracefully by providing default values.
      const response = await axios.post('http://localhost:5000/api/demo', {
        name,
        email,
        phone,
        message,
        // Do NOT include course and date here. The backend will use defaults.
      });

      // On successful submission
      setSubmissionMessage(response.data.message || 'Your message has been sent successfully!');
      setIsError(false);

      // Clear the form fields after successful submission
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');

    } catch (error) {
      // On error during submission
      console.error('Contact form submission failed:', error);
      const errorMessage =
        error.response?.data?.message || 'Failed to send message. Please try again.';
      setSubmissionMessage(errorMessage);
      setIsError(true);
    }
  };

  return (
    <section className="contact-page-section">
      <div className="container">
        <div className="section-title text-center">
          <span className="subtitle">... SEND US A MESSAGE ...</span>
          <h2>Send Us A Message.</h2>
        </div>
        <div className="contact-form-wrapper">
          {/* Display submission message */}
          {submissionMessage && (
            <p className={isError ? "error-message" : "success-message"} style={{ marginBottom: '20px' }}>
              {submissionMessage}
            </p>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required // Added required attribute
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required // Added required attribute
                />
              </div>
              <div className="form-group">
                <input
                  type="tel" // Use type="tel" for phone numbers
                  placeholder="Phone Number (Optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group full-width">
              <textarea
                placeholder="Message."
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required // Added required attribute
              ></textarea>
            </div>
            <div className="form-submit">
              <button type="submit">SEND EMAIL &gt;</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;