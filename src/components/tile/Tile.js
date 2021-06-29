import React from "react";

export const Tile = (props) => {
  return (
    <div key={props.index} className="tile-container">

       <p className="tile-title">{props.element.name}</p>
       {props.element.phone && <p className="tile"> Numer telefonu: {props.element.phone} </p> }
       {props.element.email && <p className="tile"> Adres e-mail: {props.element.email} </p> }
    </div>
  );
};