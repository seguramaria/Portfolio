import React from 'react';
import '../stylesheets/Footer.scss';
import ArrowUp from '../images/ico-arrow.svg';

const Footer = () => {
  return (
    <footer className="page__footer">
      <div className="footer__wrapper">
        <section className="footer">
          <div className="arrow">
            <a href="#home" title="Volver al inicio">
              <img src={ArrowUp} alt="Icono para deslizar" />
            </a>
          </div>
          <div className="footer__menu">
            <nav className="list list__1">
              <ul className="list">
                <li>
                  <a href="#home" title="Ir a Inicio">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#aboutMe" title="Ir a Sobre mí">
                    Sobre mí
                  </a>
                </li>
                <li>
                  <a href="#skills" title="Ir a Habilidades">
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#projects" title="Ir a proyectos">
                    Proyectos
                  </a>
                </li>
                <li>
                  <a href="#contact" title="Ir a contactar">
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="list list__2">
              <ul className="list">
                <li>
                  <a
                    href="https://adalab.es/"
                    title="Ir a Adalab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://adalab.es/"
                    title="Ir a Adalab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://adalab.es/"
                    title="Ir a Adalab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mastodon.social
                  </a>
                </li>
              </ul>
            </nav>

            <div className="copy">
              <h5>&copy;2020</h5>

              <span className="heart">
                <i className="fas fa-heart"></i>
              </span>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
