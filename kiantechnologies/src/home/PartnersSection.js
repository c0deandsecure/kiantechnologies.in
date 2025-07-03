import { ChevronLeft, ChevronRight } from "lucide-react";
import "./PartnersSection.css";

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="partners-header">
        <h2>
          Kian Technologies's <span>Partner</span>
        </h2>
        <div className="underline"></div>
        <p>
          Explore our trusted partners and leave a review to share your experience with us – Your feedback matters!
        </p>
      </div>

      <div className="partners-content">
        <button className="arrow-btn">
          <ChevronLeft size={20} />
        </button>

        <div className="partners-logos">
          <img src="	https://kiantechnologies.in/assets/img/sponsor/gmb.png" alt="Google" />
          <img src="https://kiantechnologies.in/assets/img/sponsor/jd.png" alt="JustDial" />
          <img src="https://kiantechnologies.in/assets/img/sponsor/s1.png" alt="Shiksha" />
          <img src="https://kiantechnologies.in/assets/img/sponsor/ss2.png" alt="Sulekha" />
          <img src="https://kiantechnologies.in/assets/img/sponsor/cv.png" alt="College vidya" />
          <img src="https://kiantechnologies.in/assets/img/sponsor/im.png" alt="Indian mart" />
        </div>

        <button className="arrow-btn">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default PartnersSection;
