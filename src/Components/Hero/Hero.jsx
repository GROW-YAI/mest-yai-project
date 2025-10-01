import React from "react";
import './Hero.css';
import dark_arrow from '../../Assets/dark-arrow.png';

const Hero = () => {
  return (
    <section className="hero"  aria-label="Hero">
      <div className="hero-inner container">
        <div className="hero-text">
          <h1>Step into Comfort &amp; Freshness — Naturally!</h1>
          <p>
            Discover the power of bamboo socks — designed to treat foot rot,
            keep your feet dry, and provide unmatched comfort. Pair it with our
            pure citronella oil, the natural solution for eliminating foot odor.
            Experience freshness, healing, and sustainability with every step.
          </p>

          <a
            href="tel:+233240077236"
            className="btn call-btn"
            aria-label="Call to explore more"
            title="Call to explore more"
          >
            Explore More
            <img src={dark_arrow} alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
