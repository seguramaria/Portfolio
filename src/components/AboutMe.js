import React from 'react';
import '../stylesheets/AboutMe.scss';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
  return (
    <article className="article-1">
      <div className="tip__wrapper">
        <div className="tip">
          <Fade bottom cascade>
            <span className="tip__headline">Reinventándome</span>
          </Fade>
          <Fade bottom cascade>
            {' '}
            <h2 className="tip__title">
              <span>Conoce mi </span>
              <span>historia</span>
            </h2>{' '}
          </Fade>
          <Fade bottom big>
            <p className="tip__text">
              Como educadora social siempre utilizaba la tecnología como
              herramienta para la transformación social. Durante los últimos
              años, me he dedicado a enseñar nuevas tecnologías a personas en
              riesgo de exclusión. Fue buscando información para mi alumnado
              cuando conocí el mundo de la programación.
            </p>
            <p className="tip__text">
              En mi trabajo como orientadora laboral recomendé a muchas personas
              con grandes aptitudes que se formaran para ser programadores/as.
              Un día decidí que tocaba aplicarme mis propios consejos y por ello
              me animé a reinventarme.
            </p>
          </Fade>
          <Fade bottom>
            <button className="go-button">
              <a
                href="https://adalab.es/"
                title="Ir a Adalab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Skills
              </a>
            </button>
          </Fade>
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
