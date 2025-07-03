import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const galleryImages = [
  "https://kiantechnologies.in/assets/img/gallery/g-1.jpg",
  "https://kiantechnologies.in/assets/img/gallery/g-2.jpg",
  "https://kiantechnologies.in/assets/img/gallery/g-3.jpg",
  "https://kiantechnologies.in/assets/img/gallery/g-4.jpg",
  "https://kiantechnologies.in/assets/img/gallery/g-5.jpg",
  "https://kiantechnologies.in/assets/img/gallery/g-6.jpg"
];

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-col" data-aos="fade-up">
          <img
            src="https://kiantechnologies.in/assets/img/logo/logo12.png"
            alt="Kian Logo"
            className="footer-logo"
          />
          <p>
            Based in Bhilai, India, Kian Technologies is a premier provider of IT Security Training
            and Services, dedicated to empowering corporations and aspiring IT professionals.
          </p>
        </div>

        {/* Useful Links */}
        <div className="footer-col" data-aos="fade-up" data-aos-delay="100">
          <h4>Useful Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/register">Registration</Link></li>
          </ul>
        </div>

        {/* Account Info */}
        <div className="footer-col" data-aos="fade-up" data-aos-delay="200">
          <h4>Account Info</h4>
          <ul>
            <li><Link to="/pages">Teacher</Link></li> {/* Example path, adjust as needed */}
            <li><Link to="/blog">Blog Details</Link></li> {/* Example path, adjust as needed */}
          </ul>
        </div>

        {/* Photo Gallery */}
        <div className="footer-col gallery-col" data-aos="fade-up" data-aos-delay="300">
          <h4>Photo Gallery</h4>
          <div className="gallery">
            {galleryImages.map((src, index) => (
              <img key={index} src={src} alt={`gallery-${index}`} className="gallery-img" />
            ))}
          </div>
        </div>
      </div>

      {/* Social + Newsletter */}
      <div className="footer-bottom" data-aos="fade-up">
        <div className="social-icons">
          {/* Consider making these actual links if they lead somewhere specific */}
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        </div>
        <div className="newsletter">
          <input type="email" placeholder="Email Address..." />
          <button>Subscribe Now</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;