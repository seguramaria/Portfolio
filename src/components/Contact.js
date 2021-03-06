import React from 'react';
import '../stylesheets/layout/Contact.scss';

const Contact = () => {
  return (
    <section className="form" id="contact">
      <div className="form__wrapper">
        <h2 className="h2">Contacto</h2>
        <section>
          <form
            action="https://formspree.io/mwkrblze"
            method="post"
            className="contact-form"
          >
            <label htmlFor="name">
              Nombre completo <span className="asterisk">*</span>
            </label>
            <input
              className="input"
              placeholder="Nombre..."
              type="text"
              id="name"
              name="name"
              required
            />
            <div className="email-tel">
              <label className="email-label " htmlFor="email">
                Email <span className="asterisk">*</span>
              </label>
              <input
                className="email-input input"
                placeholder="nombre.apellidos@mail.com"
                type="email"
                id="email"
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <label className="phone-label" htmlFor="phone">
                Teléfono
              </label>
              <input
                className="phone-input input"
                placeholder="Ej: 123456789"
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
              />
            </div>
            <label htmlFor="comments">
              Mensaje <span className="asterisk">*</span>
            </label>
            <textarea
              className="input"
              placeholder="¿Qué necesitas?"
              id="comments"
              name="comments"
              required
            ></textarea>
            <input className="button" type="submit" value="ENVIAR" />
          </form>

          <section className="socialmedia">
            <ul className="socialmedia__list">
              <li className="socialmedia__list-li">
                <a
                  href="https://twitter.com/MariaesSegura"
                  title="Ir al perfil de Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="socialmedia__list-li">
                <a
                  href="https://www.linkedin.com/in/seguramaria/"
                  title="Ir al perfil de linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="socialmedia__list-li">
                <a
                  href="https://github.com/seguramaria"
                  title="Ir al perfil de Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="socialmedia__list-li">
                <a
                  href="mailto:msegber@gmail.com"
                  title="Enviar email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Contact;
