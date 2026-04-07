
import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png"; 
import hero_image from "../Assets/hero_imae.png"; 

const Hero = () => {
  return (
    <div className="hero">
      
      <div className="hero-left">
        <h3>NEW ARRIVALS ONLY</h3>

        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" />
        </div>

        <p>collections</p>
        <p>for everyone</p>

        <div className="hero-latest-btn">
          <div>Latest Collections</div>
          <span>→</span>
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>

    </div>
  );
};

export default Hero;
