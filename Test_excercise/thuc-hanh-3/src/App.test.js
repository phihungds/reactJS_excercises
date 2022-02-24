import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('Should render without errors', () => {
    const component = shallow(<App />)
    const wrapper = component.find('.App')
    expect(wrapper.length).toBe(1)
  })
})
