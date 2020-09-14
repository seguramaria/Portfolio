import React from 'react';
// import { Link } from 'react-router-dom';
import '../stylesheets/Projects.scss';
import Project from './Project';

const ProjectsList = (props) => {
  const projects = props.projects.map((project, index) => {
    return (
      <li className="card " key={index}>
        <Project
          id={project.id}
          name={project.name}
          image={project.image}
          github={project.github}
          githubpages={project.githubpages}
        />
              
      </li>
    );
  });

  return (
    <section className="portfolio" id="projects">
              
      <div className="portfolio__wrapper">
        <h2 className="portfolio__title">Proyectos</h2>
        <ul className="portfolio__container">{projects}</ul>
      </div>
    </section>
  );
};

export default ProjectsList;
