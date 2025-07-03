import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./CoursesHero.css";

const CoursesHero = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      easing: 'ease-in-out-quad'
    });
  }, []);

  return (
    <>
      <header className="courses-header">
        <div className="header-container">
          <div className="logo-container">
            <h1 className="logo">K T KIAN TECHNOLOGIES</h1>
            <p className="tagline">LEARN SHARE TEACH ARCHIEVE</p>
          </div>
          <nav className="main-nav">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/about">ABOUT US</a></li>
              <li><a href="/courses" className="active">COURSES</a></li>
              <li><a href="/contact">CONTACT US</a></li>
              <li><a href="/pages">TEACHER</a></li>
              <li><a href="/register" className="register-btn">REGISTER</a></li>
              <li><a href="/blog" className="register-btn">BLOG</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="courses-hero">
        <div className="overlay">
          <div className="hero-content" data-aos="fade-up">
            <h1 data-aos="zoom-in" data-aos-delay="100">
              Genius <span>Courses</span>
            </h1>
            <div className="breadcrumb" data-aos="fade-up" data-aos-delay="300">
              <a href="/">HOME</a>
              <span className="current">COURSES</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesHero;