import React from 'react';
import '../stylesheets/Contact.scss';

const Contact = () => {
  return (
    <>
      <div class="contact">
        <h2>CONTACTO</h2>
        <p class="large-text">No dudes en contactar</p>
        <p class="small-text">
          Todos los campos marcados con <span class="asterisk">*</span> son
          obligatorios.
        </p>
      </div>

      <section>
        <form
          action="https://formspree.io/mwkrblze"
          method="post"
          class="contact-form"
        >
          <label for="name">
            Nombre completo <span class="asterisk">*</span>
          </label>
          <input
            placeholder="Nombre..."
            type="text"
            id="name"
            name="name"
            required
          />
          <div class="email-tel">
            <label class="email-label" for="email">
              Email <span class="asterisk">*</span>
            </label>
            <input
              class="email-input"
              placeholder="nombre.apellidos@mail.com"
              type="email"
              id="email"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <label class="phone-label" for="phone">
              Teléfono
            </label>
            <input
              class="phone-input"
              placeholder="Ej: 123456789"
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </div>
          <label for="comments">
            Mensaje <span class="asterisk">*</span>
          </label>
          <textarea
            placeholder="¿Qué necesitas?"
            id="comments"
            name="comments"
            required
          ></textarea>
          <input class="button" type="submit" value="ENVIAR" />
        </form>
      </section>
    </>
  );
};

export default Contact;
