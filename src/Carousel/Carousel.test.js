import React from 'react';
import { Carousel } from './Carousel';
import { shallow } from 'enzyme';

describe('Carousel', () => {
  
  const mockYogaType = [{
    image: "/static/media/JIVAMUKTI.41aa6479.png", name: "Jivamukti", id: 10, purpose: "To improve ones relationship to all others and thu…ess of being, the discovery of lasting happiness.",
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
  }]

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



  it('should match snapshot', () => {
    wrapper = shallow (<Carousel
          yogaTypes={mockYogaType}
          studios={mockStudio}
          storeRendered={storeRendered}
          storeEmptyType={storeEmptyType}
        />
        )
    expect(wrapper).toMatchSnapshot();
  });
});