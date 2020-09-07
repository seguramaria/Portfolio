import React from 'react';
import '../stylesheets/Skills.scss';
import MySelfIcon from '../images/Iconos/2.png';

const Skills = () => {
  return (
    <section class="skills section" id="skills">
      <h2 class="section-title">Skills</h2>

      <div class="skills__container">
        <div class="skills__box">
          <h3 class="skills__subtitle">Development</h3>
          <span class="skills__name">Html</span>
          <span class="skills__name">Css</span>
          <span class="skills__name">Javascript</span>
          <span class="skills__name">Scss</span>
          <span class="skills__name">React</span>
          <span class="skills__name">Vue</span>

          <h3 class="skills__subtitle">Design</h3>
          <span class="skills__name">Figma</span>
          <span class="skills__name">Adobe XD</span>
          <span class="skills__name">Photoshop</span>
        </div>

        <div class="skills__img">
          <img
            class="skills__img-1"
            src={MySelfIcon}
            alt="Dibujo Mujer con portátil"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Skills;
