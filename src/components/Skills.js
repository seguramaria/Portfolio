import React from 'react';
import '../stylesheets/Skills.scss';
import MySelfIcon from '../images/Iconos/2.png';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__wrapper">
        <Fade big>
          <h2 className="skills__title">Habilidades</h2>
        </Fade>
        <div className="skills__container">
          <div className="skills__box">
            <Fade clear>
              <h3 className="skills__subtitle">Desarrollo web</h3>
            </Fade>
            <Flip right>
              <span className="skills__name">Javascript</span>
              <span className="skills__name">React</span>
              <span className="skills__name">Git</span>
              <span className="skills__name">npm</span>
              <span className="skills__name">gulp</span>
              <span className="skills__name">VSCode</span>
            </Flip>
            <Fade clear>
              <h3 className="skills__subtitle">Diseño y maquetación</h3>
            </Fade>
            <Flip right>
              <span className="skills__name">HTML5</span>
              <span className="skills__name">CSS3</span>
              <span className="skills__name">Sass</span>
              <span className="skills__name">Figma</span>
              <span className="skills__name">CSS Grid</span>
              <span className="skills__name">Flexbox</span>
              <span className="skills__name">Bootstrap</span>
            </Flip>
            <Fade clear>
              <h3 className="skills__subtitle">
                Metodologías ágiles, comunicación y trabajo en equipo
              </h3>
            </Fade>
            <Flip right>
              <span className="skills__name">Agile</span>
              <span className="skills__name">SCRUM</span>
              <span className="skills__name">Trello</span>
              <span className="skills__name">Slack</span>
              <span className="skills__name">GitHub</span>
            </Flip>
          </div>
          <Fade right>
            <div className="skills__img">
              <img
                className="skills__img-1"
                src={MySelfIcon}
                alt="Dibujo Mujer con portátil"
              ></img>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Skills;
