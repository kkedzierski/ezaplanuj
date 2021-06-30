import React, { useState } from "react";
import PropTypes from 'prop-types';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';
import { validEmail, validPhone } from '../../components-utils'

export const ContactsPage = ({contacts, addContact} ) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [nameErr, setNameErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();
      if(isValid(e)){
        addContact(name, phone, email);
        setName('');
        setEmail('');
        setPhone('');
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
        <ContactForm 
          handleSubmit={handleSubmit}
          nameErr={nameErr} 
          phoneErr={phoneErr} 
          emailErr={emailErr}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}/>
      </section>
      <hr />
      <section>
        <h2>Kontakty</h2>

        <TileList tiles={contacts}/>

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
