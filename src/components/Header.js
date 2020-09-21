import React from 'react';
import '../stylesheets/layout/Header.scss';
import MySelfIcon from '../images/3.png';
class Header extends React.Component {
  render() {
    return (
      <header className="header" id="header">
        <div className="wrapper">
          <div className="header__name">
            <a className="header__name-a" href="#home" title="Ir a Inicio">
              <img
                className="header__name-a-img"
                src={MySelfIcon}
                alt="Icono de la página"
              />
            </a>
          </div>
          <nav>
            <ul className="header__menu">
              <li>
                <a className="menu-item" href="#aboutMe" title="Ir a Sobre mí">
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  className="menu-item"
                  href="#skills"
                  title="Ir a Habilidades"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  className="menu-item"
                  href="#projects"
                  title="Ir a proyectos"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a className="menu-item" href="#contact" title="Ir a contactar">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
