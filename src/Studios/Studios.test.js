import React from 'react';
import Studios from './Studios';
import { shallow } from 'enzyme';

const mockRender = jest.fn()

describe('Studios', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <Studios 
        renderDisplay={mockRender}
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  //test render 
  //test renderDisplay

});