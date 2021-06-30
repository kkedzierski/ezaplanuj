import React from "react";

export const ContactForm = ({
  nameErr,
  phoneErr,
  emailErr,
  handleSubmit
}) => {
  return (
  <form onSubmit={handleSubmit} className="add-contact">
    <label htmlFor ="name">Imię: </label>
    <input name="name" placeholder="Wpisz imię" required/>
    
    <label htmlFor ="phone">Telefon: </label>
    <input name="phone" type="tel" placeholder="Wpisz numer telefonu" required />
    <label htmlFor="email">E-mail: </label>
    <input name="email" type="email" placeholder="Wpisze e-mail"  required/>
    <button type="submit">Zapisz kontakt</button>
    {nameErr && <p className="error-info" >Imię istnieje już w kontaktach</p>}
    {emailErr && <p className="error-info" >Email jest nieprawidłowy</p>}
    {phoneErr &&  <p className="error-info" >Telefon jest nieprawidłowy</p>}
  </form>
  );
};