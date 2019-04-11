import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App 
      />
    )
    .find()
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
    expect (wrapper).toMatchSnapshot();
  });

  it('should start as undefined before a user clicks on the button to find studios', () => {
    let result = wrapper.instance().storeEmptyType("");
  expect(result).toBe(undefined);
    });

    it("should start out with typeImages", () => {
      
    })

});
