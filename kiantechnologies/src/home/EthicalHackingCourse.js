import React from "react";
import "./EthicalHackingCourse.css";
import {link} from "react-router-dom";
const EthicalHackingCourse = () => {
  return (
    <div className="ethical-hacking-container">
      <div className="eh-left">
        <img
          src="https://kiantechnologies.in/uploads/eh01.png"
          alt="Hacker Banner"
          className="eh-image"
        />
        <img
          src="https://kiantechnologies.in/uploads/eh02.png"
          alt="Types of Hackers"
          className="eh-image"
        />
        <img
          src="https://kiantechnologies.in/uploads/eh03.png"
          alt="Types of Hackers"
          className="eh-image"
        />
        
      </div>

      <div className="eh-right">
        <h2>OUR INSTITUTE COURSE</h2>
        <h1 className="h1">Ethical Hacking Course Syllabus</h1>
        <p>
          The CEH training in Bhilai prepares you to master advanced database
          management, networking, and operating systems. You'll also develop
          crucial soft skills to effectively communicate security issues within
          any organization. Our comprehensive ethical hacking course
          encompasses the latest security domains essential for fortifying an
          organization's information security infrastructure.
        </p>

        <ul className="eh-features">
          <li>🔹 Real-time network traffic analysis</li>
          <li>🔹 Advanced SQL injection techniques</li>
          <li>🔹 Defense against complex network attacks</li>
          <li>🔹 Sophisticated session and DNS spoofing strategies</li>
          <li>🔹 Exploiting and mitigating buffer overflow vulnerabilities</li>
          <li>🔹 Advanced password cracking methods</li>
        </ul>

        <p>
          Moreover, ethical hackers need a forward-thinking mindset to
          counteract the ever-evolving tactics of black hat hackers. As a
          professional ethical hacker, you will anticipate and thwart these
          emerging threats. The certified ethical hacker course in Bhilai
          empowers you with the latest tools and methodologies used by elite
          hackers and cybersecurity professionals. You'll engage in 24 dynamic
          hacking challenges, spread across 4 levels of increasing complexity,
          addressing 18 attack vectors, including the OWASP Top 10,
          transforming you into a future-ready cybersecurity expert.
        </p>

        <div className="eh-buttons">
          <button className="btn blue">INQUIRE NOW</button>
          <button className="btn cyan">GET BROCHURE</button>
        </div>
      </div>
    </div>
  );
};

export default EthicalHackingCourse;
