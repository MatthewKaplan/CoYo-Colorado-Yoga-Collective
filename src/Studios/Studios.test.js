import React from 'react';
import Studios from './Studios';
import { shallow } from 'enzyme';


describe('Studios', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <Studios />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  //test render 
  //test renderDisplay

});