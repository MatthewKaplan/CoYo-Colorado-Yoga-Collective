import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import MockData from "../Helper/mockData";

let mockYogaTypes = MockData.mockTypes;
let mockYogaStudios = MockData.mockStudios;

describe('App', () => {

  let mockMessage = 'This is a mock message';

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App studios={mockYogaStudios} yogaTypes={mockYogaTypes} />
    );
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
    wrapper.instance().storeRendered(mockYogaStudios);
    expect(wrapper.state('rendered')).toHaveLength(3);
  });

  it('should update yoga types', () => {
    expect(wrapper.state('yogaTypes')).toEqual( [] );
    wrapper.instance().updateTypes(mockYogaTypes);
    expect(wrapper.state('yogaTypes')).toHaveLength(2);
  });

  it('should store message to emptyType', () => {
    expect(wrapper.state('emptyType')).toEqual( '' );
    wrapper.instance().storeEmptyType(mockMessage);
    expect(typeof wrapper.state('emptyType')).toBe('string');
  });
  
});
