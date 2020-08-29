import React from 'react';
import '../stylesheets/AboutMe.scss';

const AboutMe = () => {
  return (
    <article class="article-1">
      <div class="tip__wrapper">
        <div class="tip">
          <span class="tip__headline">Reinventándome</span>
          <h2 class="tip__title">
            <span>Conoce mi </span>
            <span>historia</span>
          </h2>
          <p class="tip__text">
            Como educadora social siempre utilizaba la tecnología como
            herramienta para la transformación social. Durante los últimos años,
            me he dedicado a enseñar nuevas tecnologías a personas en riesgo de
            exclusión. Fue buscando información para mi alumnado cuando conocí
            el mundo de la programación.
          </p>
          <p class="tip__text">
            En mi trabajo como orientadora laboral recomendé a muchas personas
            con grandes aptitudes que se formaran para ser programadores/as. Un
            día decidí que tocaba aplicarme mis propios consejos y por ello me
            animé a reinventarme.
          </p>
          <div class="go-button">
            <a
              href="https://adalab.es/"
              title="Ir a Adalab"
              target="_blank"
              rel="noopener noreferrer"
            >
              Skills
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
