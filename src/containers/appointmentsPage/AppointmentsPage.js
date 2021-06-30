import React, { useState } from "react";
import { AppointmentForm } from '../../components/appoitmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';
import PropTypes from 'prop-types';

export const AppointmentsPage = (props) => {

  const {appointments, addAppointment, contacts} = props;
  const [contact, setContact] = useState(
    contacts.length > 0 ? contacts[0].name : ""
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({
      title: e.target.title.value,
      contact: contact,
      date: e.target.date.value,
      time: e.target.time.value
    });
    clearForm(e);
    
  };

  const clearForm = (e) => {
    e.target.title.value = "";
    setContact("");
    e.target.time.value = "";
    e.target.date.value = "";
  };


  return (
    <div>
      <section>
        <h2>Dodaj spotkanie</h2>
        <AppointmentForm setContact={setContact} contacts={contacts} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Spotkania</h2>
        <TileList array={appointments}/>
      </section>
    </div>
  );
};

// AppointmentsPage.propTypes = {
//   title: PropTypes.string,
//   contact: PropTypes.string,
//   date: PropTypes.string,
//   time: PropTypes.string
// }
