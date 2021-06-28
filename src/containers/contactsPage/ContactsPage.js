import React from "react";
import PropTypes from 'prop-types';
import { ContactForm } from '../../components/contactForm/ContactForm';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const {contacts, addContact} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(contacts.filter(contact => contact.name === e.target.name.value).length < 1){
      addContact({
        name: e.target.name.value,
        phone: e.target.phone.value,
        email: e.target.email.value
      })
      e.target.name.value = '';
      e.target.phone.value = '';
      e.target.email.value = '';
    }
  };

  return (
    <div>
      <section>
        <h2>Dodaj kontakt</h2>
        <ContactForm contacts handleSubmit={handleSubmit} />
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
