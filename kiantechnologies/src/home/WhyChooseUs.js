import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import "./WhyChooseUs.css";

const reasons = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", // Replace with your uploaded icons
    title: "The Power Of Education.",
    desc: "Empowering students with in-depth knowledge, practical skills, and critical thinking to thrive in the ever-evolving tech landscape.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    title: "Best Online Education.",
    desc: "Offering top-tier, flexible online courses that blend expert instruction with hands-on experience, accessible anytime, anywhere.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/201/201818.png",
    title: "Education For All Student.",
    desc: "Providing inclusive, affordable education tailored to meet the needs of diverse learners, ensuring everyone has the opportunity to excel.",
  },
];

const testimonials = [
  {
    quote:
      '"The ethical hacking course at Kian Technologies completely transformed my career. The hands-on approach and expert guidance made complex concepts easy to grasp. Highly recommended!"',
    name: "Ravi Kumar",
    course: "Ethical Hacking",
  },
  {
    quote:
      "“Kian Technologies is the best place to learn cybersecurity. The trainers are highly skilled and the training is thorough, giving me the confidence to tackle real-world security challenges.”",
    name: "Priya Sharma",
    course: "CCNA",
  },
];

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="why-choose-section">
      <div className="advantages-header">
        <p className="small-heading">Best Advantages</p>
        <h2>
          Reason Why Choose <span>Kian Technologies</span>
        </h2>
      </div>

      <div className="reasons-grid">
        {reasons.map((item, index) => (
          <div className="reason-card" key={index}>
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="testimonial-section">
        <h2>
          Students <span>Testimonial.</span>
        </h2>
        <div className="testimonial-underline"></div>

        <div className="testimonial-slider">
          <div className="testimonial-card">
            <p className="testimonial-quote">{testimonials[currentIndex].quote}</p>
            <p className="testimonial-author">
              {testimonials[currentIndex].name} | {testimonials[currentIndex].course}
            </p>
          </div>

          <div className="testimonial-buttons">
            <button onClick={prevTestimonial}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextTestimonial}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
