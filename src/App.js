import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([{}]);
  const [appointments, setAppointments] = useState([{}]);
  
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (contact) => {
    setContacts(prev => [contact, ...prev]);
  }

  const addAppointment = (appointment) => {
    setAppointments(prev => [appointment, ...prev]);
  };

  return (
    <>
      <nav>

          <nav id="main-navigation">
            <NavLink to={ROUTES.CONTACTS} activeClassName="active">
              Kontakty
            </NavLink>
            <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
              Spotkania
            </NavLink>
          </nav>
        
      </nav>
      <main>
          <Switch>
            <Route path={ROUTES.CONTACTS}>
              <ContactsPage contacts = {contacts} addContact={addContact} />
            </Route>
            <Route path={ROUTES.APPOINTMENTS}>
              <AppointmentsPage contacts = {contacts} appointments = {appointments} addAppointment={addAppointment} />
            </Route>
          </Switch>
      </main>
    </>
  );
}

export default App;
