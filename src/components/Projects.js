import React from 'react';
import '../stylesheets/Projects.scss';
import RickMorty from '../images/projects/1.png';
import TVSeries from '../images/projects/2.png';
import CodeBusters from '../images/projects/3.png';
import Pokemon from '../images/projects/4.png';
import SailorMoon from '../images/projects/5.png';
import Tentacle from '../images/projects/6.png';
const Projects = () => {
  return (
    <section className="portfolio" id="projects">
      <div className="portfolio__wrapper">
        <h2 className="portfolio__title">Proyectos</h2>

        <div className="portfolio__container ">
          <div className="portfolio__img">
            <img
              className="portfolio__img-img"
              src={RickMorty}
              alt="Personaje de la serie Rick y Morty"
            />

            <div className="portfolio__link">
              <a href="#" className="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div className="portfolio__img">
            <img
              className="portfolio__img-img"
              src={TVSeries}
              alt="Video VHS"
            />

            <div className="portfolio__link">
              <a href="#" className="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div className="portfolio__img">
            <img
              className="portfolio__img-img"
              src={CodeBusters}
              alt="Fantasma"
            />

            <div className="portfolio__link">
              <a href="#" className="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div className="portfolio__img">
            <img className="portfolio__img-img" src={Pokemon} alt="Pokemon" />

            <div className="portfolio__link">
              <a href="#" className="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div className="portfolio__img">
            <img
              className="portfolio__img-img"
              src={SailorMoon}
              alt="Imagen de Sailor Moon"
            />

            <div className="portfolio__link">
              <a href="#" className="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div className="portfolio__img">
            <img
              className="portfolio__img-img"
              src={Tentacle}
              alt="Tentáculo del videojuego Maniac Mansion"
            />

            <div className="portfolio__link">
              <a href="#" className="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
