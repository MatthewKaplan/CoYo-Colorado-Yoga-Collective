import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

let mockStudio = {
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

describe('Search', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Search 
      studio={mockStudio}
      />
    )
  });

it('should match snapshot', () => {
  expect (wrapper).toMatchSnapshot();
});

it ('should have default state', () => {
  expect(wrapper.state()).toEqual({
    searchQuery: ''
  });
});

it('should take text from input box to filter studios when handleInputChange is invoked', () => {
  wrapper.find('.studioSearch').simulate('change', {target: {value: "Whole Yoga"}});
})

});