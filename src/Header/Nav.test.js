import React from 'react';
import { Nav } from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Nav data={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});