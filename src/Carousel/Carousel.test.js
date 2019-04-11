import React from 'react';
import Carousel from './Carousel';
import { shallow } from 'enzyme';

const mockYogaTypes =
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
                    }

describe('Carousel', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Carousel 
        yogaTypes={mockYogaTypes}
      />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  //test map functionality

});