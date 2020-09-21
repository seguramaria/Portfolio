import React from 'react';
import '../stylesheets/layout/App.scss';

import { Link } from 'react-router-dom';

const NoProject = () => {
  return (
    <>
      <section className="no-character">
        <p>Página no encontrada</p>
      </section>
      <Link to="/" className="not-found__link"></Link>
    </>
  );
};

export default NoProject;
