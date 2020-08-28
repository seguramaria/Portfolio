import React from 'react';
import '../stylesheets/Header.scss';

const Header = () => {
  return (
    <header className="header hidden">
      <div className="container">
        <div className="header__title"></div>
        <div className="header__title-container">
          {/* <h2 className="header__title-container-h2">Rick y Morty</h2> */}
          <p className="header__title-container-p">
            ¡Busca tu personaje favorito!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
