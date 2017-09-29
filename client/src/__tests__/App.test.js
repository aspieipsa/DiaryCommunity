import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import App from '../App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome t o React!</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper).toContainReact(welcome)
});
