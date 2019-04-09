// import React from './node_modules/react';
// import TypeCard from './TypeCard';
// import { shallow } from './node_modules/enzyme';

// describe('TypeCard', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(
//       <TypeCard />
//     )
//   });

// it('should match snapshot', () => {
//   expect (wrapper).toMatchSnapshot();
// });

// });


import React from 'react';
import TypeCard from './TypeCard';
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
      <TypeCard name={mockType.name}
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



});
