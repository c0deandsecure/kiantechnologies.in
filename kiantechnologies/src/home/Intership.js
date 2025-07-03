import React from 'react';
import { motion } from 'framer-motion';
import './Internship.css';

const InternshipCard = ({ title, description, imageSrc, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(33, 204, 204, 0.3)",
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundPosition: "right center",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.div 
      className="internship-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
    >
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-image-container">
        <img src={imageSrc} alt={title} className="card-image" loading="lazy" />
        <motion.div 
          className="apply-button"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <a href="register">APPLY NOW</a>
        </motion.div>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const App = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const internships = [
    {
      title: "Ethical Hacking",
      description: "Ethical Hacker, Penetration, VAPT",
      imageSrc: "https://kiantechnologies.in/uploads/courses/it1.png"
    },
    {
      title: "Web Technology",
      description: "Full-Stack Developer, Software Engineer, Web Developer",
      imageSrc: "https://kiantechnologies.in/uploads/courses/it1.png"
    },
    {
      title: "Cyber Security",
      description: "Cyber Security Engineer, Soc Analyst, Network Engineer",
      imageSrc: "https://kiantechnologies.in/uploads/courses/it1.png"
    },
    
  ];

  return (
    <section className="internship-section">
      <div className="container">
        <motion.div 
          className="section-header"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: 'left' }}
        >
          <span className="section-subtitle">OUR INTERNSHIP</span>
          <h2 style={{ textAlign: 'left' }}>Kian Technologies's <span>Internship</span></h2>
        </motion.div>

        <motion.div 
          className="internship-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {internships.map((internship, index) => (
            <InternshipCard
              key={index}
              index={index}
              {...internship}
            />
          ))}
        </motion.div>

        <motion.div
          className="view-all-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="view-all-button"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(33, 204, 204, 0.4)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
          >
            All Internship <i className="fas fa-arrow-right"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default App;