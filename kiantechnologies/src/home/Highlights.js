import React from "react";
import "./Highlights.css";

const highlights = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135773.png",
    title: "100% Job Assistance",
    desc: "We collaborate with leading companies to offer job assistance for our students, while also providing opportunities to work directly with our agency and our clients.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    title: "Chance To Work On Live Projects",
    desc: "Our priority is delivering 100% practical knowledge, offering students the opportunity to work on real-time client projects in collaboration with our parent agency.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    title: "Micro Batch Size",
    desc: "With a micro-batch size of just 20-25 students, we guarantee that each participant benefits from individualized attention and dedicated support from the trainer.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    title: "Flexible Batch Timing",
    desc: "We offer flexible batch timings to accommodate the diverse personal and professional commitments of each student.",
  },
];

const Highlights = () => {
  return (
    <section className="highlights-section">
      <h2 className="section-title">Institute Highlights</h2>
      <div className="highlights-container">
        {highlights.map((item, index) => (
          <div className="highlight-card" key={index}>
            <img src={item.icon} alt={item.title} className="highlight-icon" />
            <h3 className="highlight-title">{item.title}</h3>
            <p className="highlight-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
