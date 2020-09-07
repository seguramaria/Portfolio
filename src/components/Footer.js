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
                  <a
                    href="https://adalab.es/"
                    title="Ir a Adalab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Articles
                  </a>
                </li>
                <li>
                  <a
                    href="https://adalab.es/"
                    title="Ir a Adalab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Books
                  </a>
                </li>
                <li>
                  <a
                    href="https://adalab.es/"
                    title="Ir a Adalab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="https://adalab.es/"
                    title="Ir a Adalab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reasons
                  </a>
                </li>
                <li>
                  <a
                    href="https://adalab.es/"
                    title="Ir a Adalab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tips
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
              <h5>&copy;2017</h5>
              <div>
                <span>We</span>
                <span className="heart">
                  <i className="fas fa-heart"></i>
                </span>
                <span className="components"> components</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
