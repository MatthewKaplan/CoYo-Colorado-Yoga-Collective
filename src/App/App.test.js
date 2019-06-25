import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import MockData from "../Helper/mockData";

let mockYogaTypes = MockData.mockTypes;
let mockYogaStudios = MockData.mockStudios;
const mockAddImgs = jest.fn();

describe("App", () => {
  let mockMessage = "This is a mock message";

  let wrapper, instance;
  beforeEach(() => {
    wrapper = shallow(
      <App
        studios={mockYogaStudios}
        yogaTypes={mockYogaTypes}
        localStorage={[]}
        addImgs={mockAddImgs}
      />
    );
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(MockData.mockStudios)
      })
    );
    instance = wrapper.instance();
  });

  // afterEach(() => {
  //   window.fetch.mockClear();
  // });

  it("should render without errors", () => {
    const appComponent = wrapper.find("[data-test='component-app']");
    expect(appComponent.length).toBe(1);
  });

  it("should have default state", () => {
    const initialStudioState = wrapper.state("studios");
    const initialYogaState = wrapper.state("yogaTypes");
    const initialRenderedState = wrapper.state("rendered");
    const initialemptyTypeState = wrapper.state("emptyType");
    expect(initialStudioState).toEqual([]);
    expect(initialYogaState).toEqual([]);
    expect(initialRenderedState).toEqual([]);
    expect(initialemptyTypeState).toEqual("");
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should start as undefined before a user clicks on the button to find studios", () => {
    let result = wrapper.instance().storeEmptyType("");
    expect(result).toBe(undefined);
  });

  describe("fetchStudios", () => {
    const studiosUrl =
      "https://fe-apps.herokuapp.com/api/v1/whateverly/1901/SallyHaefling/studios";

    it("should invoke 'fetch' with the correct param for yoga studios", () => {
      instance.fetchStudios(studiosUrl);
      expect(fetch).toHaveBeenCalledWith(studiosUrl);
    });

    it("should set an error in state if the fetch fails", async () => {
      window.fetch = jest
        .fn()
        .mockImplementationOnce(() =>
          Promise.reject(new Error("Fetch Failed"))
        );
      expect(wrapper.state("error")).toBe("");
      await instance.fetchStudios();
      expect(wrapper.state("error")).toBe("Fetch Failed");
    });
  });

  describe("fetchTypes", () => {
    const typesUrl =
      "https://fe-apps.herokuapp.com/api/v1/whateverly/1901/SallyHaefling/yoga";

    it("should invoke 'fetch' with the correct param for yoga studios", () => {
      instance.fetchTypes(typesUrl);
      expect(fetch).toHaveBeenCalledWith(typesUrl);
    });

    it("should set an error in state if the fetch fails", async () => {
      window.fetch = jest
        .fn()
        .mockImplementationOnce(() =>
          Promise.reject(new Error("Fetch Failed"))
        );
      expect(wrapper.state("error")).toBe("");
      await instance.fetchTypes();
      expect(wrapper.state("error")).toBe("Fetch Failed");
    });
  });

  describe("addImgs", () => {
    it("should invoke 'updateTypes' with the correct params", () => {
      let MockFn = jest.spyOn(instance, "updateTypes");
      wrapper.instance().updateTypes(mockYogaTypes);
      instance.addImgs();
      expect(MockFn).toHaveBeenCalledWith(mockYogaTypes);
    });
  });

  it("should store rendered studios", () => {
    expect(wrapper.state("rendered")).toEqual([]);
    wrapper.instance().storeRendered(mockYogaStudios);
    expect(wrapper.state("rendered")).toEqual(mockYogaStudios);
  });

  it("should update yoga types", () => {
    expect(wrapper.state("yogaTypes")).toEqual([]);
    wrapper.instance().updateTypes(mockYogaTypes);
    expect(wrapper.state("yogaTypes")).toEqual(mockYogaTypes);
  });

  it("should store message to emptyType", () => {
    expect(wrapper.state("emptyType")).toEqual("");
    wrapper.instance().storeEmptyType(mockMessage);
    expect(typeof wrapper.state("emptyType")).toBe("string");
  });
});
