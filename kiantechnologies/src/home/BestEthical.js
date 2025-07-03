import React from 'react';
import { motion } from 'framer-motion';
import './BestEthical.css';

const BestEthical = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 20px rgba(76, 234, 255, 0.4)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="ethical-hacking" className="best-ethical-section">
      <div className="container">
        <motion.div 
          className="content-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="text-content">
            <motion.div className="section-header" variants={itemVariants}>
              <span className="subtitle">EC-COUNCIL COURSE</span>
              <motion.h2 variants={itemVariants}>
                Best <span>Ethical Hacking</span> Training in Bhilai
              </motion.h2>
              <motion.h3 className="course-code" variants={itemVariants}>
                - C|EHv13 Course
              </motion.h3>
            </motion.div>
            
            <motion.div className="description" variants={itemVariants}>
              <motion.p variants={itemVariants}>
                Have you ever imagined a career that never gets monotonous, offers lucrative pay, and gives a sense of pride? Ethical hacking training in Bhilai offers exactly that.
              </motion.p>
              <motion.p variants={itemVariants}>
                Bhilai is known for offering top-tier certified ethical hacking courses that prepare you for a successful IT career with hands-on experience in scanning, testing, and securing complex infrastructures.
              </motion.p>
              <motion.p variants={itemVariants}>
                The training covers cybersecurity aspects including social engineering, protocols, and IT infrastructure testing, equipping you to identify weaknesses and protect organizations.
              </motion.p>
            </motion.div>
            
            <motion.div className="action-buttons" variants={itemVariants}>
              <motion.a 
                href="contact" 
                className="action-btn primary"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                INQUIRE NOW
              </motion.a>
              <motion.a 
                href="uploads/courses/CEH-brochure.pdf" 
                download="Kian_Brochure.pdf" 
                className="action-btn secondary"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                GET BROCHURE
              </motion.a>
            </motion.div>
          </div>

          <motion.div 
            className="image-content"
            variants={itemVariants}
          >
            <div className="certificate-grid">
              <motion.img 
                src="https://kiantechnologies.in/uploads/ceh02.png" 
                alt="CEH Certificate" 
                variants={imageVariants}
                whileHover="hover"
              />
              <motion.img 
                src="https://kiantechnologies.in/uploads/ceh01.png" 
                alt="CEH Training" 
                variants={imageVariants}
                whileHover="hover"
              />
              <motion.img 
                src="https://kiantechnologies.in/uploads/ceh04.png" 
                alt="CEH Course" 
                variants={imageVariants}
                whileHover="hover"
              />
              <motion.img 
                src="https://kiantechnologies.in/uploads/ceh03.png" 
                alt="CEH Program" 
                variants={imageVariants}
                whileHover="hover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BestEthical;