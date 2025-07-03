import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library
import "./blogHero.css"; // Import component-specific CSS

const BlogHero = () => { // Renamed to BlogHero for consistency with file name
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      easing: 'ease-in-out-quad' // Easing function for animation
    });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      {/* Header Section */}
      <header className="about-header"> {/* Consider renaming to 'blog-header' for consistency */}
        <div className="header-container">
          <div className="logo-container">
            <h1 className="logo">K T KIAN TECHNOLOGIES</h1>
            <p className="tagline">LEARN SHARE TEACH ARCHIEVE</p>
          </div>
          <nav className="main-nav">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/about">ABOUT US</a></li> {/* 'active' class removed here as this is for blog page */}
              <li><a href="/courses">COURSES</a></li>
              <li><a href="/contact">CONTACT US</a></li>
              <li><a href="/pages">TEACHER</a></li>
              <li><a href="/register" className="register-btn">REGISTER</a></li>
              <li><a href="/blog" className="active">BLOG</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="about-hero"> {/* Consider renaming to 'blog-hero' for consistency */}
        <div className="overlay">
          <div className="hero-content" data-aos="fade-up">
            {/* Main heading with animated text */}
            <h1 data-aos="zoom-in" data-aos-delay="100">
              Genius <span>Blog</span> {/* Changed 'About' to 'Blog' for relevance */}
            </h1>
            {/* Breadcrumb navigation with animation */}
            <div className="breadcrumb" data-aos="fade-up" data-aos-delay="300">
              <a href="/">HOME</a>
              <span className="current">BLOG</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogHero; // Export the component