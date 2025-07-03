import React from "react";
import "./AboutWithNews.css";

const AboutWithNews = () => {
  return (
    <section className="about-news-container">
      <div className="about-text">
        <p>
        Kian Technologies is at the forefront of cybersecurity education, dedicated to crafting the future leaders in digital security through comprehensive training programs. Based in Bhilai, India, we specialize in ethical hacking, penetration testing, and network security, providing a robust curriculum designed to equip students with the skills needed to excel in today’s dynamic cyber landscape.
        </p>
        <p>
        Our institute stands out for its hands-on approach, where students engage directly with the latest tools and technologies under the guidance of seasoned industry professionals. We believe in bridging the gap between theoretical knowledge and practical application, ensuring that our students gain real-world experience and can effectively address contemporary security challenges.        </p>
        <p>
        Our mission is to empower aspiring cybersecurity experts with cutting-edge skills and profound knowledge, enabling them to safeguard digital environments against emerging threats. Whether you're looking to enhance your current expertise or start a new career in cybersecurity, Kian Technologies offers a pathway to success with personalized attention and a commitment to excellence. Join us to transform your potential into performance and become a key player in the global cybersecurity landscape.        </p>
      </div>

      <aside className="related-news">
        <h2>Related <span>News.</span></h2>

        <div className="news-item">
          <img src="https://kiantechnologies.in/assets/img/blog%20img/bybit1.png" alt="Bybit News" />
          <div>
            <p className="date">📅 22 Feb 2025</p>
            <p className="headline">Bybit Confirms $1.46B Crypto Heist in Cold Wallet Attack.</p>
          </div>
        </div>

        <div className="news-item">
          <img src="https://kiantechnologies.in/assets/img/blog%20img/openai1.png" alt="ChatGPT News" />
          <div>
            <p className="date">📅 22 Feb 2025</p>
            <p className="headline">OpenAI Bans ChatGPT Misuse for Surveillance & Influence.</p>
          </div>
        </div>

        <a className="view-all" href="/blog">View All News ➤</a>
      </aside>
    </section>
  );
};

export default AboutWithNews;
