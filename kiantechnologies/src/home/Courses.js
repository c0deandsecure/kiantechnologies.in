import React from 'react';
import { motion } from 'framer-motion';
import './Courses.css';

const courses = [
  {
    title: 'IT Security and Ethical Hacking (Beginner to Pro)',
    students: '330 students',
    category: 'Ethical Hacking',
    image: 'https://kiantechnologies.in/uploads/courses/it.png',
    rating: 5,
  },
  {
    title: 'IT Security and Ethical Hacking (Basic)',
    students: '110 Students',
    category: 'Ethical Hacking',
    image: 'https://kiantechnologies.in/uploads/courses/it.png',
    rating: 5,
  },
  {
    title: 'Python',
    students: '55 Students',
    category: 'Scripting Language',
    image: 'https://kiantechnologies.in/uploads/courses/python.png',
    rating: 5,
  },
  {
    title: 'Computer Networking',
    students: '155 students',
    category: 'Networking',
    image: 'data:image/jpeg;base64,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',
    rating: 4,
  },
  {
    title: 'Cisco Certified Network Associate (CCNA)',
    students: '120 students',
    category: 'Networking',
    image: 'https://kiantechnologies.in/uploads/courses/ccna.png',
    rating: 5,
  },
];

const Courses = () => {
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: {
      y: -15,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 216, 216, 0.25)",
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundPosition: '100% 0',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: { scale: 0.98 }
  };

  return (
    <section className="courses-section">
      <div className="section-header">
        <motion.div 
          className="header-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="subtitle">EXPERT-LED PROGRAMS</p>
          <h2>
            Transform Your Career with Our 
            <span> Popular Courses</span>
          </h2>
          <div className="header-decoration">
            <div className="deco-line"></div>
            <div className="deco-dot"></div>
            <div className="deco-line"></div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="courses-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {courses.map((course, index) => (
          <motion.article 
            className="course-card"
            key={index}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="card-inner">
              <div className="image-container">
                <img 
                  src={course.image} 
                  alt={course.title}
                  loading="lazy"
                />
                <div className="category-ribbon">
                  <span>{course.category}</span>
                </div>
                <div className="hover-overlay"></div>
              </div>
              
              <div className="course-content">
                <div className="meta-info">
                  <span className="students">
                    👥 {course.students}
                  </span>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < course.rating ? 'active' : ''}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                
                <h3>{course.title}</h3>
                
                <div className="card-footer">
                  <motion.button
                    className="enroll-btn"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div 
        className="cta-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        
      </motion.div>
    </section>
  );
};

export default Courses;