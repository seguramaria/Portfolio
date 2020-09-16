import React from 'react';
import '../stylesheets/Header.scss';
import MySelfIcon from '../images/Iconos/6.png';
class Header extends React.Component {
  render() {
    return (
      <header class="header" id="header">
        <div class="wrapper">
          <div class="header__name">
            <a class="header__name-a" href="#home" title="Ir a Inicio">
              <img
                class="header__name-a-img"
                src={MySelfIcon}
                alt="Icono de la página"
                width="60px"
                height="50px"
              />
            </a>
          </div>
          <nav>
            <ul class="header__menu">
              <li>
                <a
                  id="about"
                  className="menu-item"
                  href="#aboutMe"
                  title="Ir a Sobre mí"
                >
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
