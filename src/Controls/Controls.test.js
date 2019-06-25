import React from "react";
import Controls from "./Controls";
import { shallow } from "enzyme";
import MockData from "../Helper/mockData";

let mockRendered = MockData.mockStudios;

describe("Controls", () => {
  let wrapper, instance;

  let mockStudio = [
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
    },
    {
      name: "Denver MySore",
      mainTypeOffered: 4,
      address: "910 Santa Fe Dr, Denver, CO 80204",
      phoneNum: "(303)477-0370",
      openEveryday: false,
      mission: "Classes in the heart of Denver's Santa Fe Art District.",
      googleRating: 5,
      dropInFee: "$20.00",
      teacherTraining: false,
      link:
        "http://www.denvermysore.com/ashtanga-yoga-and-the-denver-mysore-community/practice-ashtanga-yoga/",
      img: "https://i.imgur.com/esQTB37.jpg"
    }
  ];

  const mockStoreEmptyType = jest.fn();
  const mockStoreRendered = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Controls
        storeEmptyType={mockStoreEmptyType}
        studios={mockStudio}
        storeRendered={mockStoreRendered}
        rendered={mockRendered}
      />
    );
    instance = wrapper.instance();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("displayAllStudios", () => {
    it("should render a show all button", () => {
      let MockFn = jest.spyOn(instance, "displayAllStudios");
      wrapper.find("[data-test='show-all-button']").simulate("click");
      expect(MockFn).toHaveBeenCalled();
    });

    it("should invoke 'storeEmptyType' with the correct params", () => {
      instance.displayAllStudios();
      expect(mockStoreEmptyType).toHaveBeenCalledWith("");
    });

    it("should invoke 'storeRendered' with the correct params", () => {
      instance.displayAllStudios();
      expect(mockStoreRendered).toHaveBeenCalledWith(mockStudio);
    });
  });

  describe("sortByPrice", () => {
    it("should render a sort by price button", () => {
      let MockFn = jest.spyOn(instance, "sortByPrice");
      wrapper.find("[data-test='sort-price-button']").simulate("click");
      expect(MockFn).toHaveBeenCalled();
    });

    it("should invoke 'priceFilter'", () => {
      let MockFn = jest.spyOn(instance, "priceFilter");
      instance.sortByPrice();
      expect(MockFn).toHaveBeenCalled();
    });

    it("should invoke 'storeRendered' with the correct params", () => {
      instance.sortByPrice();
      expect(mockStoreRendered).toHaveBeenCalledWith(mockStudio);
    });
  });

  describe("priceFilter", () => {
    it("should return proper value if rendered length is greater or equal to one", () => {
      const results = instance.priceFilter();
      expect(results).toEqual(mockRendered);
    });

    it("should return proper value if rendered length is less than one", () => {
      mockRendered = [];
      wrapper = shallow(
        <Controls
          storeEmptyType={mockStoreEmptyType}
          studios={mockStudio}
          storeRendered={mockStoreRendered}
          rendered={mockRendered}
        />
      );
      instance = wrapper.instance();
      const results = instance.priceFilter();
      expect(results).toEqual(mockStudio);
    });
  });
});
