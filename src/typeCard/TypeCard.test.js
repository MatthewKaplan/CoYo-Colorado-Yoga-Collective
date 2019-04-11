import React from 'react';
import TypeCard from './TypeCard.js';
import { shallow } from 'enzyme';

const mockType = {
  name: "Hatha",
  id: 10,
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
        id={mockType.id}
        purpose={mockType.purpose}
        beginnerFriendly={mockType.beginnerFriendly}
        propsUsed={mockType.propsUsed}
        commonPoses={mockType.commonPoses}
      />
    )
  });

  // it('should render correctly with all the information passed', () => {
  //   expect(wrapper).toMatchSnapshot();
  // });

  it('should have default state', () => {
    const initialTypeId = wrapper.state('typeId');
    expect(initialTypeId).toBe(0);
  });

  it('should render a find studios button', () => {
    const findStudiosBtn = wrapper.find("[data-test='find-studios-btn']");
    expect(findStudiosBtn.length).toBe(1);
  });

  it('should have value of typeId', () => {
    const initialTypeId = wrapper.state('typeId');
    expect(initialTypeId).toBe(0);
    const findStudiosBtn = wrapper.find("[data-test='find-studios-btn']");
    expect(findStudiosBtn.props().id).toBe(10);
  })

  it.skip('should display message if user input is 9 or 10', () => {
    const findStudiosBtn = wrapper.find("[data-test='find-studios-btn']");
    findStudiosBtn.simulate('click', {preventDefault: () => {}});
    expect(handleClickChangeMock).toBeCalled();
    // expect(message).toBe('Sorry but the style of yoga you choose is not currently being offered at any studios, please check back or choose another style.')
  })



});
