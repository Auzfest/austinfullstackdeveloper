import React from 'react';
import Aust from '../images/Aust.jpg';
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-title-container">
        <img
          src= {Aust}
          alt="Austin Barnes"
          className="profile-photo"
        />
        <h1 className="hero-title">Austin Barnes</h1>
        <p className="hero-subtitle">Fullstack Developer</p>
        <p className="hero-description">
          I create projects with a focus on creating responsive, and user-friendly websites. 
          Striving to use my skills to work with others to solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default Hero;
