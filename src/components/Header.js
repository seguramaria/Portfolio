import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import '../stylesheets/Header.scss';
import LightSpeed from 'react-reveal/LightSpeed';

class Header extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <LightSpeed top>
        <Menu right>
          <a id="home" className="menu-item" href="#home" title="Ir a Inicio">
            Inicio
          </a>
          <a
            id="about"
            className="menu-item"
            href="#aboutMe"
            title="Ir a Sobre mí"
          >
            Sobre mí
          </a>
          <a
            id="skills"
            className="menu-item"
            href="#skills"
            title="Ir a Habilidades"
          >
            Mis habilidades
          </a>
          <a
            id="projects"
            className="menu-item"
            href="#projects"
            title="Ir a proyectos"
          >
            Proyectos
          </a>
          <a
            id="contact"
            className="menu-item"
            href="#contactform"
            title="Ir a contactar"
          >
            Contacto
          </a>
          <a
            href="https://twitter.com/MariaesSegura"
            title="Ir al perfil de Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/seguramaria/"
            title="Ir al perfil de linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/seguramaria"
            title="Ir al perfil de Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>

          <a
            href="mailto:msegber@gmail.com"
            title="Enviar email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-envelope"></i>
          </a>
        </Menu>
      </LightSpeed>
    );
  }
}

export default Header;
