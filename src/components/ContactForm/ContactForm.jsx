import React from "react";

const ContactForm = ({
  field_name,
  field_email,
  field_message,
  button_name,
  onSubmitHandler,
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="row">
        <div className="contact__form-name col-sm">
          <input
            type="text"
            name="name"
            placeholder={field_name}
            autoComplete="off"
            required
          />
        </div>
        <div className="contact__form-email col-sm">
          <input
            type="email"
            name="email"
            placeholder={field_email}
            autoComplete="off"
            required
          />
        </div>
      </div>
      <textarea name="message" rows="5" placeholder={field_message} required />
      <input id="honeypot" type="text" name="honeypot" defaultValue="" />
      <button className="contact__button button button--light" type="submit">
        {button_name}
      </button>
    </form>
  );
};

export default ContactForm;
