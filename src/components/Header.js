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
            id="contact"
            className="menu-item"
            href="#skills"
            title="Ir a Habilidades"
          >
            Mis habilidades
          </a>
          <a
            id="contact"
            className="menu-item"
            href="#projects"
            title="Ir a proyectos"
          >
            Proyectos
          </a>
          <a
            id="contact"
            className="menu-item"
            href="#contact"
            title="Ir a contactar"
          >
            Contacto
          </a>
          {/* <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a> */}
        </Menu>
      </LightSpeed>
    );
  }
}

export default Header;
