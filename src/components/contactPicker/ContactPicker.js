import React from "react";

export const ContactPicker = ({contacts, handleChange}) => {
  return (
    <select onChange={handleChange}>
      <option value={""} key={-1} selected="selected">
        Nie wybrano żadnego kontaktu
      </option>
      {contacts.length <= 0 ? null : (
        contacts.map((element, index) => 
        <option key={index} value={element.name}>{element.name}</option>
      ))}
    </select>
  );
};