import React from 'react';
import Studios from './Studios';
import { shallow } from 'enzyme';
import MockData from "../Helper/mockData";

const mockRendered = MockData.mockStudios;
const mockStudios = MockData.mockStudios;
const mockRender = jest.fn()

describe('Studios', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <Studios 
        renderDisplay={mockRender}
        rendered={mockRendered}
        studios={mockStudios}
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});