import React from "react";

export const Tile = (props) => {
  return (
    <div key={props.index} className="tile-container">

       <p className="tile-title">{props.element.name}</p>
       {props.element.phone && <p className="tile"> Numer telefonu: {props.element.phone} </p> }
       {props.element.email && <p className="tile"> Adres e-mail: {props.element.email} </p> }

       {props.element.title && <p className="tile"> Tytuł: {props.element.title} </p> }
       {props.element.contact && <p className="tile"> Kontakt: {props.element.contact} </p> }
       {props.element.date && <p className="tile"> Kiedy: {props.element.date} </p> }
       {props.element.time && <p className="tile"> O której: {props.element.time} </p> }
    </div>
  );
};