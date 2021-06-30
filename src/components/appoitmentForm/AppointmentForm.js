import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  handleSubmit,
  setContact
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
      <input name="title" placeholder="Wpisz tytuł..." required/>
      
      <label htmlFor="kontakt">Kontakt: </label>
      <ContactPicker 
        contacts={contacts} 
        onChange={(e) => setContact(e.target.value) }
        name="kontakt" 
      />
      <label htmlFor="date">Data: </label>
      <input name="date" type="date" placeholder="Wprowadź datę..." min={getTodayString()}  required/>

      <label htmlFor="time">O której? </label>
      <input name="time" type="time" placeholder="Wprowadź godzinę... " required/>
      <button type="submit">Zapisz spotkanie</button>

    </form>
  );
};
