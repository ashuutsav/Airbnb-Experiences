import React from 'react';
import './Hero.css';
import photo from '../images/photo-grid.png';

const Hero = () => {
  return (
    <div className="gridBlock">
      <img src={photo} className="gridImg" alt="experience grid" />
      <h1 className="heroTagline">Online Experiences</h1>
      <p className="heroContent">
        Join unique interactive activities led by one-o-a-kind hosts-all without
        leaving home
      </p>
    </div>
  );
};

export default Hero;
