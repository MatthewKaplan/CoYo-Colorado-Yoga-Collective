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
  expect(wrapper).toMatchSnapshot();
});

it('should render a show all button', () => {
  const showAllBtn = wrapper.find("[data-test='show-all-button']");
  expect(showAllBtn.length).toBe(1);
});

it('should render a sort by price button', () => {
  const sortByPrice = wrapper.find("[data-test='sort-price-button']");
  expect(sortByPrice.length).toBe(1);
});

//test methods on click events

//test render()

//test if after sortByPrice that the state of rendered is populated (state lives in App.js)

});