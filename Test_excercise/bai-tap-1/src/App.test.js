import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App, { getSum } from './App';

const simulateChangeOnInput = (wrapper, inputSelector, newVal) => {
  const input = wrapper.find(inputSelector)
  input.simulate('change', { target: { value: newVal } })
  return wrapper.find(inputSelector)
}

describe("App component", () => {
  it('should return the correct sum', () => {
    const sum = getSum(4,6)
    expect(sum).toEqual(10)
  })
  it('should render required from elements', () => {
    const component = shallow(<App />)
    const wrapper = component.find('.result')
    expect(wrapper.length).toBe(1)
  })
  it('should display the result on add', () => {
    const calculator = shallow(<App />)
    simulateChangeOnInput(calculator, '#num-one-input', '4')
    simulateChangeOnInput(calculator, '#num-two-input', '6')
    calculator.find('button').simulate('click')
    const result = calculator.find('.result')
    expect(result.text()).toEqual('10')
  })
})