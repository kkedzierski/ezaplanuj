import React from "react";

export const ContactForm = ({
  // name,
  // setName,
  // phone,
  // setPhone,
  // email,
  // setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} className="add-contact">
    <label htmlFor ="name">Imię: </label>
    <input name="name" placeholder="Wpisz imię" required/>
    <label htmlFor ="phone">Telefon: </label>
    <input name="phone" type="phone" placeholder="Wpisz numer telefonu" required />
    <label htmlFor="email">E-mail: </label>
    <input name="email" type="email" placeholder="Wpisze e-mail"  required/>
    <button type="submit">Zapisz kontakt</button>
  </form>
  );
};