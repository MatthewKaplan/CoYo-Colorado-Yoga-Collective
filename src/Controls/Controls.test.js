import React from 'react';
import Controls from './Controls';
import { shallow } from 'enzyme';

describe('Controls', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Controls />
    )
  });

it('should match snapshot', () => {
  expect (wrapper).toMatchSnapshot();
});

//test methods on click events

//test render()

//test if after sortByPrice that the state of rendered is populated (state lives in App.js)

});