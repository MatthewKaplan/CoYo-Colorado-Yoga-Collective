import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {

  let mockTypes = [
    {
    name: "Hatha",
    typeId: 1,
    propsUsed: false,
    commonPoses: [
    "Vrikshasana",
    "Salabhasana",
    "Tadasana",
    "Uttanasana",
    "Adho Mukha Svanasana",
    "Setu Bandhasana"
    ],
    beginnerFriendly: true,
    purpose: "To align and calm your body, mind, and spirit in preparation for meditation."
    },
    {
    name: "Iyengar",
    typeId: 2,
    propsUsed: true,
    commonPoses: [
    "Tadasana",
    "Paripurna Navasana",
    "Adho Mukha Virasana",
    "Ustrasana",
    "Utthita Marichyasana",
    "Gomukhasana"
    ],
    beginnerFriendly: true,
    purpose: "To improve strength, awareness, mobility and stability."
    }]

  let mockStudios = [
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
    },
    {
    name: "Samadhi Yoga",
    mainTypeOffered: 5,
    address: "639 E 19th Ave, Denver, CO 80203",
    phoneNum: "(303)860-9642",
    openEveryday: true,
    mission: "To honor the science of yoga as a methodical process to create a lifestyle of health, happiness, and abundance.",
    googleRating: 4.7,
    dropInFee: "$20.00",
    teacherTraining: true,
    link: "https://samadhiyoga.net",
    img: "https://i.imgur.com/fkUvUxr.jpg"
    }]

  let mockMessage = 'This is a mock message';

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App 
      studios={mockStudios}
      yogaTypes={mockTypes}
      />
    )
  });

  it('should render without errors', () => {
    const appComponent = wrapper.find("[data-test='component-app']");
    expect(appComponent.length).toBe(1);
  });

  it('should have default state', () => {
    const initialStudioState = wrapper.state('studios');
    const initialYogaState = wrapper.state('yogaTypes');
    const initialRenderedState = wrapper.state('rendered');
    const initialemptyTypeState = wrapper.state('emptyType');
    expect(initialStudioState).toEqual([]);
    expect(initialYogaState).toEqual([]);
    expect(initialRenderedState).toEqual([]);
    expect(initialemptyTypeState).toEqual('');
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should start as undefined before a user clicks on the button to find studios', () => {
    let result = wrapper.instance().storeEmptyType("");
    expect(result).toBe(undefined);
  });

  it('should store rendered studios', () => {
    expect(wrapper.state('rendered')).toEqual( [] );
    wrapper.instance().storeRendered(mockStudios);
    expect(wrapper.state('rendered')).toHaveLength(2);
  });

  it('should update yoga types', () => {
    expect(wrapper.state('yogaTypes')).toEqual( [] );
    wrapper.instance().updateTypes(mockTypes);
    expect(wrapper.state('yogaTypes')).toHaveLength(2);
  });

  it('should store message to emptyType', () => {
    expect(wrapper.state('emptyType')).toEqual( '' );
    wrapper.instance().storeEmptyType(mockMessage);
    expect(typeof wrapper.state('emptyType')).toBe('string');
  });

});
