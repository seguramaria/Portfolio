import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Projects.scss';

const ProjectModal = (props) => {
  //PREVENT DEFAULT
  const handleModalContentClick = (ev) => {
    ev.preventDefault();
  };

  return (
    <Link to="/" className="modal__link">
      <div className="modal">
        <div className="modal__dialog">
          <div className="modal__content" onClick={handleModalContentClick}>
            <header className="modal__header">
              <h2 className="modal__title">{props.project.name}</h2>
              <Link to="/">
                <span className="modal__close icon fas fa-times"></span>
              </Link>
            </header>
            <section>
              <img className="card__img" src={props.image} alt="" />
            </section>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectModal;
