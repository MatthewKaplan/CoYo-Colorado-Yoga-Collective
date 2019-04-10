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
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    const initialSearchQueryState = wrapper.state('searchQuery');
    expect(initialSearchQueryState).toEqual('')
  });

  it('should render an input', () => {
    const searchInput = wrapper.find("[data-test='search-input']");
    expect(searchInput.length).toBe(1);
  })

  it('should take text from input box to filter studios when handleInputChange is invoked', () => {
    const searchInput = wrapper.find("[data-test='search-input']");
    searchInput.simulate('keypress', {key: 'Enter'}, {target: {value: "Whole Yoga"}});
  })

  //test handleInput
  //test findMatchingStudio
  //Fix handleInputChange test above - not working
  //test render

});