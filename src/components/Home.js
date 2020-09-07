import React from 'react';
// import { Link } from 'react-router-dom';
import ScrollDown from '../images/ico-scroll-down.svg';
import '../stylesheets/Home.scss';
import MySelfIcon from '../images/Iconos/2.png';

const Home = () => {
  return (
    <section className="page__header" id="home">
      <div className="hero">
        <div className="hero__title">
          <div className="hero__title__img">
            <img
              src={MySelfIcon}
              className="hero__title__img-icon"
              alt="Dibujo Mujer con portátil"
            ></img>
          </div>
          <h1 className="hero__title__h1">
            <span className="span">María</span>
            <span className="span">Segura</span>
          </h1>
          <p className="hero__title__p">Programadora Frontend Junior</p>
        </div>
        <div className="scroll-down">
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

export default Home;
