import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';


describe('Search', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Search />
    )
  });

it('should match snapshot', () => {
  expect (wrapper).toMatchSnapshot();
});

});