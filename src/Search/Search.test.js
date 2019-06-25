import React from "react";
import Search from "./Search";
import { shallow } from "enzyme";

let mockArr = [];

let mockSearchQuery = "Whole Yoga";

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
};

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
    name: "Rino Yoga Social",
    mainTypeOffered: 8,
    address: "3101 Walnut St, Denver, CO 80205",
    phoneNum: "(720)724-8393",
    openEveryday: true,
    mission: "At RYS, our mission is simple: make yoga accessible for all.",
    googleRating: 5,
    dropInFee: "Suggested donation",
    teacherTraining: false,
    link: "https://www.rinoyogasocial.com/",
    img: "https://i.imgur.com/nKIbWP2.jpg"
  }
];

const mockHandlInputChange = jest.fn();
const mockStoreRendered = jest.fn();

describe("Search", () => {
  let wrapper, instance;
  beforeEach(() => {
    wrapper = shallow(
      <Search
        studio={mockStudio}
        studios={mockStudios}
        storeRendered={mockStoreRendered}
        searchQuery={mockSearchQuery}
        handleInputChange={mockHandlInputChange}
      />
    );
    instance = wrapper.instance();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    const initialSearchQueryState = wrapper.state("searchQuery");
    expect(initialSearchQueryState).toEqual("");
  });

  describe("handleInputChange", () => {
    it("should invoke 'findMatchingStudio' with the correct param", () => {
      let MockFn = jest.spyOn(instance, "findMatchingStudio");
      instance.handleInputChange({ preventDefault: () => {} });
      expect(MockFn).toHaveBeenCalled();
    });

    it("should invoke 'storeRendered' with the correct params", () => {
      instance.handleInputChange({
        preventDefault: () => {}
      });
      expect(mockStoreRendered).toHaveBeenCalledWith(mockStudios);
    });
  });

  it("should render an input", () => {
    const searchInput = wrapper.find(".studioSearch");
    expect(searchInput.length).toBe(1);
  });

  it("should take text from input box to filter studios when handleInputChange is invoked", () => {
    wrapper
      .find(".studioSearch")
      .simulate(
        "keypress",
        { key: "Enter" },
        { target: { value: "Whole Yoga" } }
      );
  });

  it("should setState after handleInput is invoked", () => {
    wrapper
      .find(".studioSearch")
      .simulate("change", { target: { value: "Whole Yoga" } });
    expect(mockSearchQuery).toEqual("Whole Yoga");
  });

  it("should find a matching studio", () => {
    let result = wrapper.instance().findMatchingStudio("Rino Yoga Social");
    expect(result).toEqual(mockArr);
  });
});
