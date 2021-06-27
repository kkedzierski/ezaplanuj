import React from "react";
import PropTypes from 'prop-types';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const {contacts, addContact} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value
    })
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Dodaj kontakt</h2>
        <form onSubmit={handleSubmit} className="add-contact">
          <label htmlFor ="name">Imię: </label>
          <input name="name" placeholder="Wpisz imię" />
          <label htmlFor ="phone">Telefon: </label>
          <input name="phone" type="phone" placeholder="Wpisz numer telefonu" />
          <label htmlFor="email">E-mail: </label>
          <input name="email" type="email" placeholder="Wpisze e-mail" />
          <button type="submit">Zapisz kontakt</button>
        </form>
      </section>
      <hr />
      <section>
        <h2>Kontakty</h2>
        <label for="contacts-list">Aktualne kontakty:</label>

        <select name="contacts-list">
          {contacts.length < 0 ? null : (
            contacts.map((element, index) => 
              <option data-test="contact-option" key={index} value={element.name}>{element.name}</option>
            )
          )};
        </select>

      </section>
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
  }))
};
