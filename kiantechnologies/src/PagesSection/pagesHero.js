import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported
import AOS from "aos"; // Import AOS library
import { Link } from "react-router-dom"; // Import Link for client-side navigation
import "./pagesHero.css"; // Create this CSS file for styling

const PagesHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true,    // Whether animation should happen only once - default
      easing: 'ease-in-out-quad' // Easing curve for the animation
    });
  }, []);

  return (
    <>
      <header className="pages-header">
        <div className="header-container">
          <div className="logo-container">
            <h1 className="logo">K T KIAN TECHNOLOGIES</h1>
            <p className="tagline">LEARN SHARE TEACH ARCHIEVE</p>
          </div>
          <nav className="main-nav">
            <ul>
              {/* Using Link for client-side navigation */}
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><Link to="/courses">COURSES</Link></li>
              <li><Link to="/contact">CONTACT US</Link></li>
              <li><Link to="/pages" className="active">Teacher</Link> {/* 'PAGES' is active here */}</li>
              <li><Link to="/register" className="register-btn">REGISTER</Link></li>
              <li><Link to="/blog" className="register-btn">BLOG</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="pages-hero">
        <div className="overlay">
          <div className="hero-content" data-aos="fade-up">
            <h1 data-aos="zoom-in" data-aos-delay="100">
              Explore <span>Pages</span>
            </h1>
            <div className="breadcrumb" data-aos="fade-up" data-aos-delay="300">
              <Link to="/">HOME</Link> {/* Using Link for breadcrumb navigation */}
              <span className="current">TEACHER</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PagesHero;