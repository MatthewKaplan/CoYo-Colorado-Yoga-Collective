import React from 'react';
import DisplayMessage from './DisplayMessage.js';
import { shallow } from 'enzyme';

describe('DisplayMessage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <DisplayMessage />
    )
  });

  it('should match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
  });

//test map functionality

});