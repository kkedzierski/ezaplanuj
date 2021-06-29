import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { validEmail, validPhone } from '../../components-utils'

export const ContactsPage = (props) => {

  const {contacts, addContact} = props;

  const [nameErr, setNameErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let name = e.target.name.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;

      if(isValid(e)){
        addContact({
          name: name,
          phone: phone,
          email: email
        });
        name = '';
        email = '';
        phone = '';
        clearErrors();
      } 
  };

  const clearErrors = () =>{ 
    setNameErr(false);
    setEmailErr(false);
    setPhoneErr(false);
  }

  const isValid = (e) =>{

    let isValid = true;
    if(contacts.filter(contact => contact.name === e.target.name.value).length >= 1){
      setNameErr(true);
      isValid = false;
    }
    if(!validEmail.test(e.target.email.value)){
      setEmailErr(true);
      isValid = false;
    }
      
    if(!validPhone.test(e.target.phone.value)){
      setPhoneErr(true);
      isValid = false;
    }

    return isValid;
  }

  return (
    <div>
      <section>
        <h2>Dodaj kontakt</h2>
        <ContactForm contacts handleSubmit={handleSubmit} nameErr={nameErr} phoneErr={phoneErr} emailErr={emailErr}/>
      </section>
      <hr />
      <section>
        <h2>Kontakty</h2>
        <label htmlFor="contacts-list">Aktualne kontakty:</label>

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
