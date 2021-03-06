import React from 'react';
import '../stylesheets/layout/Home.scss';
import MySelfIcon from '../images/Iconos/6.png';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <section className="page__header" id="home">
      <div className="hero">
        <div className="hero__title">
          <Flip right>
            <div className="hero__title__img">
              <img
                src={MySelfIcon}
                className="hero__title__img-icon"
                alt="Dibujo Mujer con portátil"
              ></img>
            </div>
          </Flip>
          <Flip right>
            <h1 className="hero__title__h1">
              <span className="span">María</span>
              <span className="span">Segura</span>
            </h1>
          </Flip>
          <Fade bottom>
            <p className="hero__title__p">Programadora Frontend Junior</p>
          </Fade>
        </div>
        <div className="scroll-down">
          <a href="#aboutMe" title="Ir a la sección de információn sobre mí">
            <i className="fas fa-angle-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
