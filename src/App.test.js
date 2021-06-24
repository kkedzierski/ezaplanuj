import React from 'react';
import App from './App';
import { ContactsPage } from './containers/contactsPage/ContactsPage';
import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { shallow } from 'enzyme'
import findByTestAtr from '../Utils/index';

// --------- App CONTAINER ----------
describe('<App />', () => {
  const setUp = () => {
    const component = shallow(<App />);
    return component;
  }

  describe('Navigation', () => {

    let appComponent;
    beforeEach(() => {
      appComponent = setUp();
    });

    it('Should have minumum 2 NavLinks', () => {;
      const wrapper = appComponent.find('NavLink');
      expect(wrapper.length >= 2).toBeTruthy();    
    });

    it('Should have navlink name Kontakty or Spotkania', () =>{
      const wrapper = appComponent.find('NavLink');
      wrapper.forEach(navLink => {
        expect(navLink.text() === "Kontakty" || navLink.text() === "Spotkania").toBeTruthy();
      });
      
    });

  });  
});

// --------- ContactPage CONTAINER ----------
describe('<ContactPage />', () => {

  const setUp = (props={}) => {
    const component = shallow(<ContactsPage {...props} />);
    return component; 
  };

  describe("Have props", () => {

    let wrapper;
    beforeEach(() => {
      const props ={
        contactList: []
      }
      wrapper = setUp(props);
    });

    it("Should render contacts-list withour errors", () =>{
      const component = findByTestAtr(wrapper, 'contacts-list');
      expect(component.length).toBe(1);
    });

    it("Should render contacts in options value", () => {
      const option = findByTestAtr(wrapper, 'contact-option')
      expect(option.length).toBe(1);
    });


  });

  describe("Have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should not render", () =>{
      const component = findByTestAtr(wrapper, 'contacts-list');
      expect(component.length).toBe(0);
    });

  });

});

// --------- AppointmentsPage CONTAINER ----------

describe('<AppointmentsPage />', () => {

  const setUp = (props={}) => {
    const component = shallow(<AppointmentsPage {...props} />);
    return component;
  }

  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props ={
        appointments: [],
        contacts: [] 
      }
      wrapper = setUp(props);
    });

    it('should render appointments-list withour errors', () => {
      const component = findByTestAtr(wrapper, 'appointments-list');
      expect(component.length).toBe(1);
    });

    it("Should render appointments in options value", () => {
      const option = findByTestAtr(wrapper, 'appointment-option')
      expect(option.length).toBe(1);
    });

    it("Should render contacts-list withour errors", () =>{
      const component = findByTestAtr(wrapper, 'contacts-list');
      expect(component.length).toBe(1);
    });

    it("Should render contacts in options value", () => {
      const option = findByTestAtr(wrapper, 'contact-option')
      expect(option.length).toBe(1);
    });
    
  });

  describe("Have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should not render appointments-list", () =>{
      const component = findByTestAtr(wrapper, 'appointments-list');
      expect(component.length).toBe(0);
    });

    it("should not render contacts-list", () =>{
      const component = findByTestAtr(wrapper, 'contacts-list');
      expect(component.length).toBe(0);
    });

  });

  
  

});
