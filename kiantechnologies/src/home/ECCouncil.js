import React from "react";
import "./ECCouncil.css";
import { motion } from "framer-motion";

const ECCouncil = () => {
  return (
    <div className="ec-container">
      <motion.div
        className="ec-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h5>●● GLOBAL CERTIFICATION ●●</h5>
        <h1>
          <strong>EC-Council</strong> <span>Organization</span>
        </h1>
      </motion.div>

      <motion.div
        className="video-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2>Success Story Of CEH Master</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/qwUtC_NO4K0?si=FhCdNiuvqL7kJw2q"
            title="CEH Success Story"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      <motion.div
        className="stats"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="stat-box">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="Students" />
          <h3>5M+</h3>
          <p>Students Enrolled</p>
        </div>
        <div className="stat-box">
          <img src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png" alt="Certifications" />
          <h3>150+</h3>
          <p>Globally trusted certification</p>
        </div>
        <div className="stat-box">
          <img src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png" alt="Training" />
          <h3>20+ Years</h3>
          <p>World-class Cyber Training</p>
        </div>
        <div className="stat-box">
          <img src="https://cdn-icons-png.flaticon.com/512/6819/6819364.png" alt="Pros" />
          <h3>380K+</h3>
          <p>Trusted by pros globally</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ECCouncil;
