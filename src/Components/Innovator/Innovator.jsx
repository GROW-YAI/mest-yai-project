import React from "react";
import "./Innovator.css";
import innovatorImg from "../../Assets/Mavis Mensa-S1C2.png";

const Innovator = () => {
  return (
    <div className="innovator container">
      <h2>About the Innovator</h2>
      <div className="innovator-content">
        <img src={innovatorImg} alt="Innovator" className="innovator-img" />
        <div className="innovator-text">
          <p>
            Meet the visionary behind MMB's Hygienic Socks, a passionate entrepreneur dedicated to revolutionizing foot hygiene and wellness. With years of experience in sustainable product innovation, they have crafted a unique blend of comfort, style, and health benefits in every pair of bamboo socks and citronella oil solution.
          </p>
          <p>
            Driven by a mission to enhance daily comfort and promote eco-friendly solutions, our innovator ensures that every product meets the highest standards of quality and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Innovator;
