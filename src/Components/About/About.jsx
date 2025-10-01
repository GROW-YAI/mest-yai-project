import React from "react";
import './About.css';
import about_img from '../../Assets/about-img.jpg';
import play_icon from '../../Assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="about-inner">

        <div className="about-left" aria-hidden="false">
          <div className="about-media">
            <img src={about_img} alt="Bamboo socks product on display" className="about-img" />
            <button
              type="button"
              className="play-btn"
              onClick={() => setPlayState(true)}
              aria-label="Play product video"
              title="Play product video"
            >
              <img src={play_icon} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="about-right">
          <p className="kicker">ABOUT OUR PRODUCT</p>
          <h2 id="about-heading" className="about-title">
            Experience the natural power of bamboo &amp; citronella
          </h2>

          <div className="about-copy">
            <p className="lead">
              Our products harness the power of nature to keep your feet healthy, fresh, and odor-free.
            </p>

            <p>
              <strong>Bamboo Socks</strong> — ultra-soft, breathable, and moisture-wicking to prevent irritation, bacteria buildup, and discomfort. Say goodbye to sweaty feet and hello to all-day comfort.
            </p>

            <p>
              <strong>Citronella Oil</strong> — a natural antibacterial and antifungal solution that fights foot odor and infections, leaving your feet feeling refreshed and revitalized.
            </p>

            <p>
              At <strong>MMB's Hygienic Socks</strong>, we blend comfort, wellness, and sustainability to give you the best care for your feet—because every step matters.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
