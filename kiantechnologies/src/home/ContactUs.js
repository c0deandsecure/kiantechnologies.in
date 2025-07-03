import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-details">
          <h4 className="contact-subtitle">Contact Us</h4>
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            From managing your infrastructure to providing expert ethical hacking training in Bhilai,
            we expertly craft and execute your digital transformation strategy.
            Share your needs with us and discover how we can meet them—just fill out our form and we’ll take it from there!
          </p>

          <div className="contact-info">
            <div className="info-item">
              <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Address" className="info-icon" />
              <p><strong>Primary:</strong> 101/A, Central Avenue, Smriti Nagar, Bhilai, Durg, Chhattisgarh, 490020</p>
            </div>

            <div className="info-item">
              <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" alt="Phone" className="info-icon" />
              <p><strong>Primary:</strong> +91 7587496155</p>
            </div>

            <div className="info-item">
              <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="info-icon" />
              <p><strong>Primary:</strong> info@kiantechnologies.in</p>
            </div>
          </div>

          <a href="mailto:info@kiantechnologies.in" className="contact-button">Contact Us</a>
        </div>

        {/* Right Side */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.515024668793!2d81.3194652!3d21.211416300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293dbb95c478ab%3A0xd50ec49f3064301!2sKian%20Technologies!5e0!3m2!1sen!2sin!4v1745749514377!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kian Technologies Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
