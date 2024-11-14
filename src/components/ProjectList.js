import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'DreamBox',
    description: 'A website for a local selfie studio in Rexburg, Idaho. (In Progress)',
    links: [
      { text: 'DreamBox Current Site', url: 'https://www.dreamboxrexburg.com/' },
    ],
  },
  {
    title: 'Soccer Stats Site',
    description: 'A website for soccer fans to keep up with the latest stats and scores. (In Progress)',
    links: [
      { text: 'Rough Draft Site', url: 'https://auzfest.github.io/soccerWeb/' },
    ],
  },
  {
    title: 'Streak Snap',
    description: 'A website to track different daily streaks. (In Progress)',
    links: [
      { text: 'Streak Snap', url: 'https://streaksnap.vercel.app/' },
    ],
  },
  {
    title: 'Fake E-commerce',
    description: 'A project for a fake e-commerce store.',
    links: [
      { text: 'Fake E-commerce Repository', url: 'https://github.com/Auzfest/EcommProject' },
    ],
  },

];

const ProjectList = () => {
  return (
    <section className="project-list-container" id='projects'>
    <h1>Projects</h1>
    <section className="project-list">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          links={project.links}
        />
      ))}
    </section>
    </section>
  );
};

export default ProjectList;
