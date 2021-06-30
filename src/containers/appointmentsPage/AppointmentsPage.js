import React, { useState } from "react";
import { AppointmentForm } from '../../components/appoitmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';
import PropTypes from 'prop-types';

export const AppointmentsPage = (props) => {

  const {appointments, addAppointment, contacts} = props;

  // const [title, setTitle] = useState("");
  // const [contact, setContact] = useState("");
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setTitle(e.target.title.value);
    // setContact(e.target.contact.value);
    // setDate(e.target.date.value);
    // setTime(e.target.time.value);
    let contact = e.target.contact.value;
    if(!contact){
      contact = "Niewybrano"
    }
    addAppointment({
      title: e.target.title.value,
      contact: contact,
      date: e.target.date.value,
      time: e.target.time.value
    });
    clearForm();
    
  };

  const clearForm = (e) => {
    e.target.value.title = "";
    e.target.value.contact = "";
    e.target.value.time = "";
    e.target.value.date = "";
  };

  return (
    <div>
      <section>
        <h2>Dodaj spotkanie</h2>
        <AppointmentForm contacts={contacts} handleSubmit={handleSubmit} />
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
