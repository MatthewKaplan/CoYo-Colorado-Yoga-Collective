import React from 'react';
import StudioCard from './studioCard';
import { shallow } from 'enzyme';

const mockStudio = {
  address: "1735 E 17th Ave, Denver, CO 80218",
  dropInFee: "$17.00",
  googleRating: 4.8,
  img: "https://i.imgur.com/w7KfQWv.jpg",
  link: "https://wholeyoga.com",
  mainTypeOffered: 5,
  mission: "Where body and mind become whole.",
  name: "Whole Yoga",
  openEveryday: true,
  phoneNum: "(303)333-9642",
  teacherTraining: true
}

describe('StudioCard', () => {
  let wrapper
  beforeEach(() => {
  wrapper = shallow(
   <StudioCard  image={mockStudio.img}
                name={mockStudio.name}
                address={mockStudio.address}
                phone={mockStudio.phoneNum}
                mission={mockStudio.mission}
                rating={mockStudio.googleRating}
                roundedRating={`${Math.round(mockStudio.googleRating / 5 * 100 / 10) * 10}%`}
                link={mockStudio.link}
                fee={mockStudio.dropInFee} />
      )            
  });

  it('should render correctly with all the information passed', () => {
      expect(wrapper).toMatchSnapshot();
    });

    
});