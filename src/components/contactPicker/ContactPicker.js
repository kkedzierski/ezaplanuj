import React from "react";

export const ContactPicker = (props) => {
  console.log(props.contacts);
  return (
    <select>
      {props.contacts.length <= 0 ? null : (
        props.contacts.map((element, index) => 
        <option key={index} value={element}>{element.name}</option>
      ))}
    </select>
  );
};