import React from 'react';
import '../stylesheets/Projects.scss';

const Projects = () => {
  return (
    <article id="reasons-to-purchase" class="article-2">
      <div class="reasons__wrapper">
        <div class="reasons">
          <h2 class="reasons__title">3 Reasons to purchase</h2>
          <div class="reason reason-1">
            <h3>Ut sed metus</h3>
            <p>Lorem ipsum dolor sit amet, consecteur.</p>
          </div>
          <div class="reason reason-2">
            <h3>Curabitur ac erat</h3>
            <p>Mauris mattis urna quis lorem molestie.</p>
          </div>
          <div class="reason reason-3">
            <h3>Morbi dictum</h3>
            <p>Aliquam in dolor et dolor tincidunt.</p>
          </div>
          <div class="reason-button">
            <a
              href="https://adalab.es/"
              title="Ir a Adalab"
              target="_blank"
              rel="noopener noreferrer"
            >
              More reasons
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Projects;
