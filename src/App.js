import React from "react";
import { BrowserRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useState } from "react";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([{}]);
  const [appointments, setAppointments] = useState([{}]);
  
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (contact) => {
    setContacts(prev => [contact, ...prev]);
  }

  const addAppointment = (appointment) => {
    setAppointments(prev => [appointment, ...prev]);
  };

  return (
    <>
      <nav>
      <BrowserRouter>
          <nav id="main-navigation">
            <NavLink to={ROUTES.CONTACTS} activeClassName="active">
              Kontakty
            </NavLink>
            <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
              Spotkania
            </NavLink>
          </nav>
        </BrowserRouter>
      </nav>
      <main>
        <BrowserRouter>
          <Switch>
            <Route path={ROUTES.CONTACTS}>
              {/* Add props to ContactsPage */}
              <ContactsPage contacts = {contacts} addContact={addContact} />
            </Route>
            <Route path={ROUTES.APPOINTMENTS}>
              {/* Add props to AppointmentsPage */}
              <AppointmentsPage appointments = {appointments} addAppointment={addAppointment} />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
