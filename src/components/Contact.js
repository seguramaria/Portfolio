import React from 'react';

import '../stylesheets/Contact.scss';

const Contact = () => {
  return (
    <section className="form">
      <div className="form__wrapper" id="contact">
        <div className="contact">
          <h2>CONTACTO</h2>
        </div>

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
        </section>
      </div>
    </section>
  );
};

export default Contact;
