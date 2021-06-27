import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([{}]);
  const [appointments, setAppointments] = useState([{}]);
  
  console.log(contacts);
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
              <ContactsPage contacts = {contacts} addContact={addContact} />
            </Route>
            <Route path={ROUTES.APPOINTMENTS}>
              <AppointmentsPage appointments = {appointments} addAppointment={addAppointment} />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
