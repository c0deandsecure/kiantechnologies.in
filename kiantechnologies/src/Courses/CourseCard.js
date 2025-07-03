import React from "react";
import "./CourseListing.css"; // Make sure this path is correct

const CourseCard = ({ course }) => {
  return (
    <div className="course-card" data-aos="fade-up">
      <img src={course.image} alt={course.title} />
      <div className="course-card-content">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-provider">{course.provider}</p>

        <div className="course-meta">
          <span>{course.students}</span>
          <span>{course.duration}</span>
          <span>{course.starts}</span>
          <span>{course.category}</span>
        </div>

        <div className="course-price">{course.price}</div>
        <div className="course-rating">⭐ {course.rating}</div>
      </div>
    </div>
  );
};

export default CourseCard;
