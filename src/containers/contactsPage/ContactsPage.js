import React from "react";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Dodaj kontakt</h2> 
      </section>
      <hr />
      <section>
        <h2>Kontakty</h2>
        <datalist data-test="contacts-list">
          {this.props.contacts.length < 0 ? null : (
            this.props.contacts.forEach((index, element) => {
              <option data-test="contact-option" key={index} value={element}/>
            })
          )};
        </datalist>
        <datalist data-test="contacts-list">
          {this.props.contacts.length < 0 ? null : (
            this.props.contacts.forEach((index, element) => {
              <option data-test="contact-option" key={index} value={element}/>
            })
          )};
        </datalist>
      </section>
    </div>
  );
};
