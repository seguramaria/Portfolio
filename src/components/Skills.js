import React from 'react';
import '../stylesheets/Skills.scss';
import ImageSkills from '../images/Iconos/8.png';

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__wrapper">
        <h2 className="skills__title"> Mis habilidades</h2>

        <div className="skills__container">
          {/* COLUMN 1 */}
          <div className="skills__col1">
            <div className="skills__col1-text">
              <i></i>
              <h4 className="skills__col1-name"> Maquetación: </h4>
              <p>
                HTML5, CSS3, Flexbox, CSS Grid, diseño responsive, SASS,
                animaciones y maquetación por componentes
              </p>
            </div>
            <div className="skills__col1-text">
              <i></i>
              <h4 className="skills__col1-name"> Programación web: </h4>
              <p>JavaScript ES6 y React</p>
            </div>

            <div className="skills__col1-text">
              <i></i>
              <h4 className="skills__col1-name">
                Frameworks de desarrollo web:
              </h4>
              <p>Bootstrap</p>
            </div>
            <div className="skills__col1-text"></div>
            <h4 className="skills__col1-name"> Control de versiones: </h4>
            <p>Git</p>
          </div>
          {/* IMAGE */}
          <div className="skills__img">
            <img
              src={ImageSkills}
              className="skills__img-icon"
              alt="Ilustración"
            ></img>
          </div>

          {/* COLUMN 2 */}
          <div className="skills__col2">
            <div className="skills__col1-text">
              <i></i>
              <h4 className="skills__col1-name">
                Experiencia en el desarrollo de proyectos usando:
              </h4>
              <p>Agile y SCRUM</p>
            </div>
            <div className="skills__col1-text">
              <i></i>
              <h4 className="skills__col1-name">Herramientas de desarrollo:</h4>
              <p>Atom, Gulp, Terminal</p>
            </div>
            <div className="skills__col1-text">
              <i></i>
              <h4 className="skills__col1-name">
                Herramientas de comunicación, teletrabajo y trabajo en equipo:
              </h4>
              <p> Slack, Trello, GitHub, Zoom</p>
            </div>
            <div className="skills__col1-text">
              <i></i>
              <h4 className="skills__col1-name">Soft skills:</h4>
              <p> Creatividad, empatía, sociabilidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
