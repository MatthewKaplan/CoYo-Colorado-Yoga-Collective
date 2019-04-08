import React from 'react';
import StudioCard from './studioCard';
import { shallow } from 'enzyme';

describe('StudioCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <StudioCard />
    )
  });

it('should match snapshot', () => {
  expect (wrapper).toMatchSnapshot();
});

});