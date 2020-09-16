import React from 'react';
import '../stylesheets/Header.scss';
import MySelfIcon from '../images/Iconos/6.png';
class Header extends React.Component {
  render() {
    return (
      <>
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
                    id="skills"
                    className="menu-item"
                    href="#skills"
                    title="Ir a Habilidades"
                  >
                    Habilidades
                  </a>
                </li>
                <li>
                  <a
                    id="projects"
                    className="menu-item"
                    href="#projects"
                    title="Ir a proyectos"
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    id="contact"
                    className="menu-item"
                    href="#contact"
                    title="Ir a contactar"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* <header class="header" id="home">
          <section class="header-1">
            <h1 class="header-1-title">
              <span class="team-logo">
                <a
                  id="home"
                  className="menu-item"
                  href="#home"
                  title="Ir a Inicio"
                >
                  <img
                    src={MySelfIcon}
                    alt="Icono del equipo"
                    width="60px"
                    height="50px"
                  />
                </a>
              </span>
            </h1>
          </section>
          <nav class="header-nav">
            <ul class="header-nav-list">
              <li class="header-nav-item">
                <a
                  id="about"
                  className="menu-item"
                  href="#aboutMe"
                  title="Ir a Sobre mí"
                >
                  Sobre mí
                </a>
              </li>
              <li class="header-nav-item">
                <a
                  id="skills"
                  className="menu-item"
                  href="#skills"
                  title="Ir a Habilidades"
                >
                  Habilidades
                </a>
              </li>
              <a
                id="projects"
                className="menu-item"
                href="#projects"
                title="Ir a proyectos"
              >
                Proyectos
              </a>
              <li class="header-nav-item">
                <a
                  id="contact"
                  className="menu-item"
                  href="#contact"
                  title="Ir a contactar"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </header> */}
      </>
    );
  }
}

export default Header;
