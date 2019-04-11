import React from 'react';
import { StudioCard } from './StudioCard';
import { shallow } from 'enzyme';

describe('StudioCard', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<StudioCard data={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});