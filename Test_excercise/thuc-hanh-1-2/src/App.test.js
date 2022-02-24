import { render, screen } from '@testing-library/react';
import React from 'react';
import {mount, shallow} from 'enzyme';
import App from './App';

describe('App component', () =>{
    it('Start with default value', () => {
        const component = shallow(<App />);
        const defaultValue = component.find('div.value').text();
        expect(defaultValue).toEqual('0');
    })
    it('Increase value by 1 on click', () => {
      const component = shallow(<App />)
      const incrementBtn = component.find('button.increase')
      incrementBtn.simulate('click')
      const result = component.find('.value').text()
      expect(result).toEqual("1")
    })
    it('Decrease value by 1 on click', () => {
      const component = shallow(<App />)
      const decrementBtn = component.find('button.decrease')
      decrementBtn.simulate('click')
      const result = component.find('.value').text()
      expect(result).toEqual('-1')
    })
})