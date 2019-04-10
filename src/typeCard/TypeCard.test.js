import React from 'react';
import TypeCard from './TypeCard.js';
import { shallow } from 'enzyme';

const mockType = {
  name: "Hatha",
  typeId: 1,
  propsUsed: false,
  commonPoses: ["Vrikshasana",
    "Salabhasana",
    "Tadasana",
    "Uttanasana",
    "Adho Mukha Svanasana",
    "Setu Bandhasana"],
  beginnerFriendly: true,
  purpose: "To align and calm your body, mind, and spirit in preparation for meditation."
}

describe('TypeCard', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(
      <TypeCard 
        name={mockType.name}
        id={mockType.typeId}
        purpose={mockType.purpose}
        beginnerFriendly={mockType.beginnerFriendly}
        propsUsed={mockType.propsUsed}
        commonPoses={mockType.commonPoses}
      />
    )
  });

  it('should render correctly with all the information passed', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    const initialTypeId = wrapper.state('typeId');
    expect(initialTypeId).toBe(0);
  });

  it('should render a find studios button', () => {
    const findStudiosBtn = wrapper.find("[data-test='find-studios-btn']");
    expect(findStudiosBtn.length).toBe(1);
  });

  it('should update the state when find studios button is clicked', () => {
    const initialTypeId = wrapper.state('typeId');
    expect(initialTypeId).toBe(0);
    const findStudiosBtn = wrapper.find("[data-test='find-studios-btn']");
    findStudiosBtn.simulate('click');
    expect(initialTypeId).toBe(1);
  })




});
