import React from 'react';
import TypeCard from './TypeCard.js';
import { shallow } from 'enzyme';



describe('TypeCard', () => {
  
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

let mockType = [
  {
    "name": "Anusara",
    "typeId": 9,
    "propsUsed": true,
    "commonPoses": [
      "Ardha Chandrasana",
      "Vakrasana",
      "Virbhadrasana",
      "Garudasana"
    ],
    "beginnerFriendly": true,
    "purpose": "To align with the Divine. This is achieved by practicing the 3 As: Attitude, Alignment, Action.",
    "image": "/static/media/ANUSARA.1d0f525f.png"
  },
  {
    "name": "Ashtanga",
    "typeId": 4,
    "propsUsed": false,
    "commonPoses": [
      "Trikonasana",
      "Parivritta Trikonasana",
      "Utthita Hasta Padangushtasana",
      "Marichyasana A",
      "Prasarita Padottanasana",
      "Virabhadrasana I",
      "Paschimottanasana"
    ],
    "beginnerFriendly": false,
    "purpose": "To synchronize breath and movement to produce an internal heat designed to purify the body,it is also great for building core strength and toning the body.",
    "image": "/static/media/ASHTANGA.2698a632.png"
  }
]

  const mockStoreRendered = jest.fn();
  
  const mockStoreEmptyType = jest.fn();

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <TypeCard
          image={mockYogaType.image}
          name={mockYogaType.name}
          id={mockYogaType.typeId}
          purpose={mockYogaType.purpose}
          beginnerFriendly={mockYogaType.beginnerFriendly}
          propsUsed={mockYogaType.propsUsed}
          commonPoses={mockYogaType.commonPoses}
          studios={mockStudio}
          types={mockType}
          storeRendered={mockStoreRendered}
          storeEmptyType={mockStoreEmptyType}
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

  it('should have value of typeId', () => {
    expect(wrapper.state('typeId')).toBe( 0 );
    const findStudiosBtn = wrapper.find("[data-test='find-studios-btn']");
    expect(findStudiosBtn.length).toBe(1);
    const id = mockYogaType[0].id
    wrapper.setState({typeId: id})
    expect(wrapper.state('typeId')).toBe( 10 );
  });
})