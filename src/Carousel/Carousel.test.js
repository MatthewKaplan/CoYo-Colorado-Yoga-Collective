import React from 'react';
import Carousel from './Carousel.js';
import { shallow } from 'enzyme';

describe('Carousel', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Carousel />
    )
  });

it('should match snapshot', () => {
  expect (wrapper).toMatchSnapshot();
});

//test map functionality

});