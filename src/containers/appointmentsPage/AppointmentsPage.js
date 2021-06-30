import React, { useState } from "react";
import { AppointmentForm } from '../../components/appoitmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';
import PropTypes from 'prop-types';

export const AppointmentsPage = ({appointments, addAppointment, contacts} ) => {


  const [title, setTitle] = useState('');
  const [contact, setContact] = useState(
    contacts.length > 0 ? contacts[0].name : ""
  );
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
    clearForm(e);
    
  };

  const clearForm = (e) => {
    setTitle("");
    setContact("");
    setTime("");
    setDate("");
  };


  return (
    <div>
      <section>
        <h2>Dodaj spotkanie</h2>
        <AppointmentForm 
          setContact={setContact} 
          contacts={contacts} 
          handleSubmit={handleSubmit}
          title={title}
          setTitle={setTitle}
          contact={contact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
        />
      </section>
      <hr />
      <section>
        <h2>Spotkania</h2>
        <TileList tiles={appointments}/>
      </section>
    </div>
  );
};

AppointmentsPage.propTypes = {
  title: PropTypes.string,
  contact: PropTypes.array,
  date: PropTypes.string,
  time: PropTypes.string
}
