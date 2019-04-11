import React from 'react';
import Controls from './Controls';
import { shallow } from 'enzyme';

describe('Controls', () => {
  let wrapper;

  let mockStudio = 
  {
    name: "Whole Yoga",
    mainTypeOffered: 5,
    address: "1735 E 17th Ave, Denver, CO 80218",
    phoneNum: "(303)333-9642",
    openEveryday: true,
    mission: "Where body and mind become whole.",
    googleRating: 4.8,
    dropInFee: "$17.00",
    teacherTraining: true,
    link: "https://wholeyoga.com",
    img: "https://i.imgur.com/w7KfQWv.jpg"
  }

  const storeEmptyType = jest.fn()
  const storeRendered = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <Controls 
      storeEmptyType={storeEmptyType}
      studios={mockStudio}
      storeRendered={storeRendered}
      rendered={[]}
      />
    )
  });

it('should match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render a show all button', () => {
  const showAllBtn = wrapper.find("[data-test='show-all-button']");
  expect(showAllBtn.length).toBe(1);
});

it('should render a sort by price button', () => {
  const sortByPrice = wrapper.find("[data-test='sort-price-button']");
  expect(sortByPrice.length).toBe(1);
});

it('should invoke displayAllStudios when show-all-btn is clicked', () => {
  const showAllBtn = wrapper.find("[data-test='show-all-button']");
  showAllBtn.simulate('click', {
    preventDefault: () => {
    }
  })
  expect()
});

});