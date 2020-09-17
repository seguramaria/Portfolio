import React from 'react';
import '../stylesheets/Footer.scss';

const Footer = () => {
  return (
    <footer className="page__footer">
      <div className="footer__wrapper">
        <section className="footer">
          <div className="arrow">
            <a href="#home" title="Volver al inicio">
              <i class="fas fa-angle-up"></i>
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

            <div className="copy">
              <h5>
                María Segura &copy; 2020{' '}
                <span className="heart">
                  <i className="fas fa-heart"></i>
                </span>
              </h5>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
