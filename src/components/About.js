import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import Skills from './Skills';


const About = () => {
  return (
    <section className="about" id='about'>
      <div className="about-container">
        <IconContext.Provider value={{ size: "10em" }}>
            <IoPersonOutline />
        </IconContext.Provider>
      <div className="about-content">
          <h2>About Me</h2>
          <p>
            I’m a passionate fullstack developer focused on ...
          </p>
          <Skills /> 
        </div>
      </div>
    </section>
  );
};

export default About;
