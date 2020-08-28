import React from 'react';
// import { Link } from 'react-router-dom';

import '../stylesheets/Landing.scss';

const Landing = () => {
  return (
    <section class="page__header" id="home">
      <div class="header__menu">
        <a
          href="https://adalab.es/"
          title="Ir a Adalab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="menu-icon"
            src="./assets/images/ico-menu.svg"
            alt="Menu icon"
          />
        </a>
      </div>
      <div class="hero">
        <div class="hero__title">
          <h1 class="hero__title__h1">
            <span>Anonymous</span>
            <span>Proxy</span>
          </h1>
          <p class="hero__title__p">In hac habitasse platea dictumst.</p>
        </div>
        <div class="scroll-down">
          <a
            href="#reasons-to-purchase"
            title="Ir al artículo Reasons to purchase"
          >
            <img
              src="./assets/images/ico-scroll-down.svg"
              alt="Icono para deslizar al artículo Reasons to purchase"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
