import React from 'react';

import '../stylesheets/Contact.scss';

const Contact = () => {
  return (
    <section className="form">
      <div className="contact">
        <h2>CONTACTO</h2>
        <p className="large-text">No dudes en contactar</p>
        <p className="small-text">
          Todos los campos marcados con <span className="asterisk">*</span> son
          obligatorios.
        </p>
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
            placeholder="Nombre..."
            type="text"
            id="name"
            name="name"
            required
          />
          <div className="email-tel">
            <label className="email-label" htmlFor="email">
              Email <span className="asterisk">*</span>
            </label>
            <input
              className="email-input"
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
              className="phone-input"
              placeholder="Ej: 123456789"
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </div>
          <label htmlFor="comments">
            Mensaje <span className="asterisk">*</span>
          </label>
          <textarea
            placeholder="¿Qué necesitas?"
            id="comments"
            name="comments"
            required
          ></textarea>

          <input className="button" type="submit" value="ENVIAR" />
        </form>
      </section>
    </section>
  );
};

export default Contact;
