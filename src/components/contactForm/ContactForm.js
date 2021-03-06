import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  nameErr,
  phoneErr,
  emailErr,
  handleSubmit
}) => {
  return (
  <form onSubmit={handleSubmit} className="add-contact">
    <label htmlFor ="name">Imię: </label>
    <input
      name="name" 
      type="text"
      value={name}
      onChange = {(e) => setName(e.target.value)}
      placeholder="Wpisz imię" 
      required
    />
    
    <label htmlFor ="phone">Telefon: </label>
    <input 
      name="phone" 
      type="tel" 
      value={phone}
      onChange = {(e) => setPhone(e.target.value)}
      placeholder="Wpisz numer telefonu" 
      required 
    />

    <label htmlFor="email">E-mail: </label>
    <input 
      name="email" 
      type="email" 
      value={email}
      onChange = {(e) => setEmail(e.target.value)}
      placeholder="Wpisze e-mail"  
      required
    />

    <button type="submit">Zapisz kontakt</button>

    {nameErr && <p className="error-info" >Imię istnieje już w kontaktach</p>}
    {emailErr && <p className="error-info" >Email jest nieprawidłowy</p>}
    {phoneErr &&  <p className="error-info" >Telefon jest nieprawidłowy</p>}
  </form>
  );
};