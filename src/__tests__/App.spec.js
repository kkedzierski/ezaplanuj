import React from 'react';
import App from '../App';
import { shallow } from 'enzyme'


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