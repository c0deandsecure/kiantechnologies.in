// TeacherProfile.js
import React from 'react';
import './TeacherProfile.css';

const TeacherProfile = () => {
  return (
    <div className="teacher-profile-container">
      <div className="teacher-profile">
        {/* Left Column - Profile Card */}
        <div className="profile-card">
          <div className="profile-image">
            {/* Replaced div with img tag and added src */}
            <img
              src="https://kiantechnologies.in/assets/img/teacher/kaushal01.png"
              alt="Kaushal Sonkar Profile"
              className="teacher-photo" // Added a class for styling the image
            />
          </div>

          <div className="profile-info">
            <h1 className="profile-name">Kaushal Sonkar (KIAN)</h1>
            <p className="specialties">
              Cyber Security Analyst | Penetration Tester | Bug Bounty Hunter
            </p>

            <div className="social-links">
              <a href="https://www.instagram.com/kiantechnologies" className="social-link">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="#https://www.linkedin.com/company/kiantechnologies/" className="social-link">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="#https://www.facebook.com/people/Kian-Technologies/61571749228231/?rdid=BwVSE9qwmjfKPFuj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1UdJLhCNkt%2F" className="social-link">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="#https://x.com/kiantechnologie?t=KHZoVXwcXNKLiq9THnINsQ&s=09" className="social-link">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>

            <div className="contact-info">
              <p><i className="fas fa-phone"></i> <strong>Call:</strong> 07587496155</p>
              <p><i className="fas fa-envelope"></i> <strong>E-mail:</strong> kaushalinfo15@gmail.com</p>
              <p><i className="fas fa-map-marker-alt"></i> <strong>Address:</strong> Smriti Nagar Bhilai, Dist-Durg, Chhattishgarh (490020)</p>
            </div>
          </div>
        </div>

        {/* Right Column - About Section */}
        <div className="about-section">
          <h1 className="section-title">About Teacher</h1>
          <div className="about-content">
            <p>
              I am a Cybersecurity Analyst, Penetration Tester, Bug Bounty Hunter, and the Founder of a Cybersecurity & Ethical Hacking Institute, dedicated to shaping the future of digital defense. With a passion for cybersecurity, I specialize in mentoring the next generation through cutting-edge expertise and innovative ethical hacking techniques. My mission is to empower aspiring cybersecurity professionals, equipping them with real-world skills to tackle evolving cyber threats. By combining hands-on experience, industry insights, and advanced methodologies, I aim to create a strong, skilled cyber force ready to secure the digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;