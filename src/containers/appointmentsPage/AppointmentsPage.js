import React from "react";

export const AppointmentsPage = () => {
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Dodaj spotkanie</h2>
      </section>
      <hr />
      <section>
        <h2>Spotkania</h2>
        <datalist data-test="appointments-list">
          {this.props.appointments.length < 0 ? null : (
            this.props.appointments.forEach((index, element) => {
              <option data-test="appointment-option" key={index} value={element}/>
            })
          )};
        

        </datalist>
      </section>
    </div>
  );
};
