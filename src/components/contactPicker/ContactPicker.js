import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.handleChange}>
      <option value={""} key={-1} selected="selected">
        Nie wybrano żadnego kontaktu
      </option>
      {props.contacts.length <= 0 ? null : (
        props.contacts.map((element, index) => 
        <option key={index} value={element.name}>{element.name}</option>
      ))}
    </select>
  );
};