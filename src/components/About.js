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
            I’m a fullstack developer that creates projects with a focus on creating responsive, and user-friendly websites. I have a strong passion for technology and enjoy using my skills to build innovative and high-quality web applications.
          </p>
          <h2>Work Experience</h2>
          <div className="skills">
            <div>
              <h3>Full Stack Developer</h3>
              <h4>Category Partners LLC</h4>
              <p className='para'>Fixed 10+ site bugs, including critical image upload issues and app crashes, directly improving functionality for 150+ users.</p>
              <p className='para'>Contributed to 15+ production commits while independently learning Vue.js on the job.</p>
            </div>
            <div>
              <h3>Software Developement Intern</h3>
              <h4>Vivacity Tech PBC</h4>
              <p className='para'>Integrated 10+ new features to an application using React in collaboration with the development team. </p>
              <p className='para'>Reviewed 100+ pull requests in GitHub to ensure code worked and used best practices.</p>
              <p className='para'>Completed 100% of tasks assigned in Jira every 2 week sprint efficiently and effectively.</p>
            </div>
            <div>
              <h3>Web Fundamentals Teaching Assistant</h3>
              <h4>Brigham Young University-Idaho</h4>
              <p className='para'>Guided 60+ students improving academic performance through personalized feedback.</p>
              <p className='para'>Furthered learning for 15+ students through one on one sessions</p>
            </div>
          </div>
          <Skills /> 
        </div>
      </div>
    </section>
  );
};

export default About;
