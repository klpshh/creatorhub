import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">Project 1</div>
        <div className="project-card">Project 2</div>
        <div className="project-card">Project 3</div>
      </div>
    </section>
  );
};

export default Projects;