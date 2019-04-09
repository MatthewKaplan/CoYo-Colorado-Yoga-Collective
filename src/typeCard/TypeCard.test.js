import React from './node_modules/react';
import TypeCard from './TypeCard';
import { shallow } from './node_modules/enzyme';

describe('TypeCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <TypeCard />
    )
  });

it('should match snapshot', () => {
  expect (wrapper).toMatchSnapshot();
});



});
