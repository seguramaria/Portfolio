import React from 'react';
// import { Link } from 'react-router-dom';
import MenuIcon from '../images/ico-menu.svg';
import ScrollDown from '../images/ico-scroll-down.svg';
import '../stylesheets/Landing.scss';
import MySelfIcon from '../images/Iconos/2.png';
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
          <img class="menu-icon" src={MenuIcon} alt="Menu icon" />
        </a>
      </div>
      <div class="hero">
        <div class="hero__title">
          <div class="hero__title__img">
            <img
              src={MySelfIcon}
              class="hero__title__img-icon"
              alt="Dibujo Mujer con portátil"
            ></img>
          </div>
          <h1 class="hero__title__h1">
            <span className="span">María </span>
            <span> Segura</span>
          </h1>
          <p class="hero__title__p">Programadora Frontend Junior</p>
        </div>
        <div class="scroll-down">
          <a
            href="#reasons-to-purchase"
            title="Ir al artículo Reasons to purchase"
          >
            <img
              src={ScrollDown}
              alt="Icono para deslizar al artículo Reasons to purchase"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
