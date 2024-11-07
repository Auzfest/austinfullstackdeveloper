import React from 'react';

const ProjectCard = ({ title, description, links }) => {
  return (
    <div className="project-card">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="project-links">
        {links.map((link, index) => (
          <a href={link.url} key={index} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
