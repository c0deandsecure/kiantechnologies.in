import { ChevronRight } from "lucide-react";
import "./LatestSection.css";

const LatestSection = () => {
  return (
    <section className="latest-section">
      <div className="latest-container">
        
        {/* Latest Blogs */}
        <div className="latest-column">
          <h2 className="latest-heading">
            Latest <span>Blogs.</span>
          </h2>
          <div className="underline"></div>

          <div className="blog-item">
            <img
              src="https://kiantechnologies.in/assets/img/blog%20img/bybit1.png"
              alt="Bybit"
              className="blog-img"
            />
            <div>
              <p className="blog-date">🗓 22 Feb 2025</p>
              <h4 className="blog-title">
                Bybit Confirms $1.46B Crypto Heist in Cold Wallet Attack.
              </h4>
              <div className="blog-info">
                <span>1,220</span>
                <span>125</span>
              </div>
            </div>
          </div>

          <hr className="divider" />

          <div className="blog-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
              alt="ChatGPT"
              className="blog-img"
            />
            <div>
              <p className="blog-date">🗓 22 Feb 2025</p>
              <h4 className="blog-title">
                OpenAI Bans ChatGPT Misuse for Surveillance & Influence.
              </h4>
              <div className="blog-info">
                <span>3,151</span>
                <span>251</span>
              </div>
            </div>
          </div>

          <p className="view-link">
            View All News <ChevronRight size={18} />
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="latest-column">
          <h2 className="latest-heading">
            Upcoming <span>Events.</span>
          </h2>
          <div className="underline"></div>

          <div className="event-item">
            <div className="event-date">
              <p>09</p>
              <p>March 2025</p>
            </div>
            <div>
              <h4 className="event-title">
                Join Our Ethical Hacking Demo Class.
              </h4>
              <p className="event-subtitle">Ethical Hacking | 10:00 AM</p>
            </div>
          </div>

          <div className="event-item">
            <div className="event-date">
              <p>02</p>
              <p>March 2025</p>
            </div>
            <div>
              <h4 className="event-title">
                Join Our Scholarship Test.
              </h4>
              <p className="event-subtitle">Cyber Security | 11:00 AM</p>
            </div>
          </div>

          <div className="event-item">
            <div className="event-date">
              <p>06</p>
              <p>March 2025</p>
            </div>
            <div>
              <h4 className="event-title">
                New Batch Start.
              </h4>
              <p className="event-subtitle">Ethical Hacking | 03:00 PM</p>
            </div>
          </div>

          <p className="view-link">
            Check Calendar <ChevronRight size={18} />
          </p>
        </div>

        {/* Latest Video */}
        <div className="latest-column">
          <h2 className="latest-heading">
            Latest <span>Video.</span>
          </h2>
          <div className="underline"></div>

          <div className="video-wrapper">
            <img
              src="https://images.unsplash.com/photo-1573496529574-be85d6a60704"
              alt="Video Thumbnail"
              className="video-thumbnail"
            />
            <div className="play-button">▶</div>
          </div>

          <h4 className="video-title">
            Success Story Of CEH Master
          </h4>
          <p className="video-desc">
            How the CEH Certification Transformed My Career and Helped Me Land a Job | Akash Dhanorkar.
          </p>

          <p className="view-link">
            View All Videos <ChevronRight size={18} />
          </p>
        </div>

      </div>
    </section>
  );
};

export default LatestSection;
