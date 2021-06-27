import React from 'react';
import { AppointmentsPage } from '../containers/appointmentsPage/AppointmentsPage';
import { shallow } from 'enzyme'
import { findByTestAtr, checkProps } from '../../Utils/index';


describe('<AppointmentsPage />', () => {

    const setUp = (props={}) => {
      const component = shallow(<AppointmentsPage {...props} />);
      return component;
    }

    describe('Checking propTypes', () => {
          it('should not throw a warning', () => {
              const expextedProps = {
                contactList: [{
                  name: "Test name",
                  phone: "Test phone",
                  email: "test@email.com"
                }]
              };
  
              const propsErr = checkProps(AppointmentsPage, expextedProps);
              expect(propsErr).toBeUndefined();
          });
  
      });
  
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