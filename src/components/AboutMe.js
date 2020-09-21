import React from 'react';
import '../stylesheets/layout/AboutMe.scss';
import Fade from 'react-reveal/Fade';

import BeforeIcon from '../images/Before.png';

const AboutMe = () => {
  return (
    <article className="article-aboutme">
      <div className="aboutme__wrapper">
        <div className="aboutme" id="aboutMe">
          <div className="aboutme__img">
            <img
              src={BeforeIcon}
              className="aboutme__img-icon"
              alt="Dibujo Mujer con portátil"
            ></img>
          </div>
          <Fade bottom cascade>
            <span className="aboutme__headline">Reinventándome</span>
          </Fade>
          <Fade bottom cascade>
            {' '}
            <h2 className="aboutme__title">
              <span>Conoce mi </span>
              <span>historia</span>
            </h2>{' '}
          </Fade>
          <Fade bottom big>
            <p className="aboutme__text">
              Como educadora social siempre utilizaba la tecnología como
              herramienta para la transformación social. Durante los últimos
              años, me he dedicado a enseñar nuevas tecnologías a personas en
              riesgo de exclusión. Fue buscando información para mi alumnado
              cuando conocí el mundo de la programación.
            </p>
            <p className="aboutme__text">
              En mi trabajo como orientadora laboral recomendé a muchas personas
              que se formaran para ser programadores/as. Un día decidí que
              tocaba aplicarme mis propios consejos y por ello me animé a
              reinventarme.
            </p>
          </Fade>
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
