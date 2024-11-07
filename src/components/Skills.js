import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiPrisma, SiNextdotjs, SiExpress, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNode /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Express.js', icon: <SiExpress /> },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <h4>These are just a few of the technologies I have experience with.</h4>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} id="skill-card">
            <div id="skill-icon">{skill.icon}</div>
            <p id="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
      <h4>and more...</h4>
    </section>
  );
};

export default Skills;
