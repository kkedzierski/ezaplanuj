import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  contacts,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit} clasName="add-appointment">
      
      <label htmlFor ="title">Tytuł: </label>
      <input 
        name="title" 
        value = {title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Wpisz tytuł..." 
        required
      />
      
      <label htmlFor="kontakt">Kontakt: </label>
      <ContactPicker 
        contacts={contacts} 
        onChange={(e) => setContact(e.target.value) }
        name="kontakt" 
      />

      <label htmlFor="date">Data: </label>
      <input 
        name="date" 
        type="date" 
        value = {date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Wprowadź datę..." 
        min={getTodayString()}  
        required/>

      <label htmlFor="time">O której? </label>
      <input 
        name="time" 
        type="time" 
        value = {time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Wprowadź godzinę... " 
        required
      />
      <button type="submit">Zapisz spotkanie</button>

    </form>
  );
};
