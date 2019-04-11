import React from 'react';
import { DisplayMessage } from './DisplayMessage';
import { shallow } from 'enzyme';

describe('DisplayMessage', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<DisplayMessage data={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});