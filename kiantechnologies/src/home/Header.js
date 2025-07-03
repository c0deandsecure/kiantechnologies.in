import React from "react"; // No need for useState if no mobile menu toggle
import "./Header.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Make sure Link is imported

const Header = () => {
  // Removed isMobileMenuOpen state and related functions

  const images = [
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "backOut"
      }
    })
  };

  return (
    <header className="App">
      <motion.nav
        className="navbar"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          KT <span>KIAN TECHNOLOGIES</span>
        </motion.div>

        {/* The nav-links will now always be visible and responsive via CSS */}
        <ul className="nav-links">
          {[
            { path: "/", name: "HOME" },
            { path: "/about", name: "ABOUT US" },
            { path: "/courses", name: "COURSES" },
            { path: "/contact", name: "CONTACT US" },
            { path: "/pages", name: "TEACHER" },
            { path: "/register", name: "REGISTER" },
            { path: "/blog", name: "BLOG" }
          ].map((item, index) => (
            <motion.li
              key={item.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              whileHover={{
                color: "#00e0ff",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Removed onClick as there's no mobile menu to close anymore */}
              <Link to={item.path}>{item.name}</Link>
            </motion.li>
          ))}
        </ul>

        {/* REMOVED: mobile-menu-btn div as it's no longer needed */}
        {/* <div className="mobile-menu-btn">
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div> */}
      </motion.nav>

      <Slide
        duration={5000}
        transitionDuration={800}
        arrows={false}
        autoplay
        infinite
        indicators
      >
        {images.map((url, index) => (
          <div
            className="each-slide"
            key={index}
            style={{ backgroundImage: `url(${url})` }}
          >
            <div className="overlay">
              <motion.div
                className="hero-content"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.3
                    }
                  }
                }}
              >
                <motion.h3 variants={textVariants}>
                  EDUCATION & TRAINING ORGANIZATION
                </motion.h3>
                <motion.h1 variants={textVariants}>
                  <span className="highlight">Get</span> Certified <br />
                  <span className="highlight">Get</span> Ahead
                </motion.h1>
                <motion.p variants={textVariants}>
                  Kian Technologies offers authorized training for EC-Council
                  certifications, including <span className="highlight">CEH</span>, <span className="highlight">CHFI</span>, <span className="highlight">ECSA</span>,
                  <span className="highlight"> LPT</span>, and <span className="highlight">CISSP</span> programs.
                </motion.p>
                <motion.div variants={textVariants}>
                  <Link to="/register">
                    <motion.button
                      className="cta-button"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#00e0ff",
                        color: "#000"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      CONTACT US <FaArrowRight />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slide>
    </header>
  );
};

export default Header;