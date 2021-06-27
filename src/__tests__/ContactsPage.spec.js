import React from 'react';
import { ContactsPage } from '../containers/contactsPage/ContactsPage';
import { shallow } from 'enzyme'
import { findByTestAtr, checkProps}  from '../../Utils/index';



describe('<ContactPage />', () => {

    const setUp = (props={}) => {
      const component = shallow(<ContactsPage {...props} />);
      return component; 
    };

    describe('Checking propTypes', () => {
        it('should not throw a warning', () => {
            const expextedProps = {
              contactList: [{
                name: "Test name",
                phone: "Test phone",
                email: "test@email.com"
              }]
            };

            const propsErr = checkProps(ContactsPage, expextedProps);
            expect(propsErr).toBeUndefined();
        });

    });
  
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