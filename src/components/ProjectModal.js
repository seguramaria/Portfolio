import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/ProjectModal.scss';
import Flip from 'react-reveal/Flip';
const ProjectModal = (props) => {
  return (
    <div className="modal">
      <div className="modal__dialog">
        <div className="modal__content">
          <header className="modal__header">
            <h2 className="modal__title">{props.project.name}</h2>
            <Link to="/">
              <i class="modal__close far fa-window-close"></i>
            </Link>
          </header>
          <section className="modal__description">
            <p className="modal__description-content">
              {props.project.description}
            </p>
          </section>
          <Flip bottom>
            <section className="modal__image">
              <div className="modal__image-responsive desktop">
                <img
                  className="modal__image-content"
                  src={props.project.desktop}
                  alt={props.project.name}
                />
              </div>

              <div className="modal__image-responsive">
                <img
                  className="modal__image-content"
                  src={props.project.tablet}
                  alt={props.project.name}
                />
              </div>

              <div className="modal__image-responsive">
                <img
                  className="modal__image-content"
                  src={props.project.mobile}
                  alt={props.project.name}
                />
              </div>
            </section>
          </Flip>
          <section className="modal__links">
            <a
              className="modal__links-content"
              href={props.project.github}
              target="_blank"
              title="Ir al repositorio del proyecto"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"> </i> Enlace al repositorio
            </a>
            <a
              className="modal__links-content"
              href={props.project.githubpages}
              target="_blank"
              title="Ir al repositorio del proyecto"
              rel="noopener noreferrer"
            >
              <i class="fas fa-link"></i> Ir a la web
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
