import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import "./CourseAdvantages.css";

const CourseAdvantages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="advantages-section">
      <div className="container">
        <h2 className="section-heading">
          Kian Technologies’s Course <span>Advantages</span>
        </h2>

        <div className="advantages-grid">
          <div className="card" data-aos="fade-up">
            <img
              src="https://cdn-icons-png.flaticon.com/512/167/167707.png
"
              alt="Power of Education"
            />
            <h3>The Power Of Education.</h3>
            <p>
              Empowering students with in-depth knowledge, practical skills, and
              critical thinking to thrive in the ever-evolving tech landscape.
            </p>
          </div>

          <div className="card" data-aos="fade-up" data-aos-delay="100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828774.png
"
              alt="Best Online Education"
            />
            <h3>Best Online Education.</h3>
            <p>
              Offering top-tier, flexible online courses that blend expert
              instruction with hands-on experience, accessible anytime,
              anywhere.
            </p>
          </div>

          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png
"
              alt="Education for All"
            />
            <h3>Education For All Student.</h3>
            <p>
              Providing inclusive, affordable education tailored to meet the
              needs of diverse learners, ensuring everyone has the opportunity
              to excel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseAdvantages;
