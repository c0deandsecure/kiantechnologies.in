// InternshipSection.js
import React from 'react';
import './InternshipSection.css';
import { Link } from 'react-router-dom'; // Import Link

const InternshipSection = () => {
  return (
    <section className="internship-section">
      <div className="internship-container">
        <div className="images-section">
          <div className="large-image">
            <img
              src="https://kiantechnologies.in/assets/img/about/class1.png"
              alt="Main classroom"
            />
          </div>
          <div className="small-images">
            <img
              src="https://kiantechnologies.in/assets/img/about/class2.png"
              alt="Lab 1"
            />
            <img
              src="https://kiantechnologies.in/assets/img/about/class3.png"
              alt="Lab 2"
            />
          </div>
        </div>

        <div className="internship-content" data-aos="fade-left">
          <h2>
            <span className="highlight">Join Our Internship</span> <br /> Today!
          </h2>
          <div className="poster-image">
            <img
              src="https://kiantechnologies.in/assets/img/teacher/internship1.jpg"
              alt="Internship Poster"
            />
          </div>
          <p>
            Gain hands-on experience in <strong>cybersecurity</strong>, work on real-world
            challenges, and boost your career with expert guidance. Apply now!
          </p>
          <div className="button-wrapper">
            {/* Changed from <a> to Link */}
            <Link
              to="/register" // This will navigate to your /register route
              className="cta-button"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      </div>

      <div className="bottom-text" data-aos="fade-up">
        <h3>
          We Are <span className="bold">Best Course,</span> in Bhilai Chhattishgarh
        </h3>
      </div>
    </section>
  );
};

export default InternshipSection;