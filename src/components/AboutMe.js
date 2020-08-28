import React from 'react';
import '../stylesheets/AboutMe.scss';

const AboutMe = () => {
  return (
    <article class="article-1">
      <div class="tip__wrapper">
        <div class="tip">
          <span class="tip__headline">Insomnia tips</span>
          <h2 class="tip__title">
            <span>Looking through a </span>
            <span>window</span>
          </h2>
          <p class="tip__text">
            Donec accumsan, nulla ut volutpat porttitor, quam odio tempus felis,
            at luctus ex diam nec lectus. Vivamus semper sodales rutrum.
          </p>
          <div class="go-button">
            <a
              href="https://adalab.es/"
              title="Ir a Adalab"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
