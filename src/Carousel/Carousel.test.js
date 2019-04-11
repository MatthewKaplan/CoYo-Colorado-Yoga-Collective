import React from 'react';
import { Carousel } from './Carousel';
import { shallow } from 'enzyme';

describe('Carousel', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Carousel data={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});