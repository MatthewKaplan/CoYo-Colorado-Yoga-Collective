import React from "react";
import TypeCard from "./TypeCard.js";
import { shallow } from "enzyme";
import MockData from "../Helper/mockData";

describe("TypeCard", () => {
  const mockYogaType = [
    {
      image: "/static/media/JIVAMUKTI.41aa6479.png",
      name: "Jivamukti",
      id: 10,
      purpose:
        "To improve ones relationship to all others and thu…ess of being, the discovery of lasting happiness.",
      name: "Hatha",
      id: 10,
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
      purpose:
        "To align and calm your body, mind, and spirit in preparation for meditation."
    }
  ];

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
    }
  ];

  let mockType = [
    {
      name: "Anusara",
      typeId: 9,
      propsUsed: true,
      commonPoses: [
        "Ardha Chandrasana",
        "Vakrasana",
        "Virbhadrasana",
        "Garudasana"
      ],
      beginnerFriendly: true,
      purpose:
        "To align with the Divine. This is achieved by practicing the 3 As: Attitude, Alignment, Action.",
      image: "/static/media/ANUSARA.1d0f525f.png"
    }
  ];

  const mockStoreRendered = jest.fn();

  const mockStoreEmptyType = jest.fn();

  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(
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
    );
    instance = wrapper.instance();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    const initialTypeId = wrapper.state("typeId");
    expect(initialTypeId).toBe(0);
  });

  describe("setTypeId", () => {
    it("should invoke 'setTypeId' when find studios btn is clicked", () => {
      let MockFn = jest.spyOn(instance, "setTypeId");
      wrapper
        .find("[data-test='find-studios-btn']")
        .simulate("click", { target: { id: 9 } });
      expect(MockFn).toHaveBeenCalledWith({ target: { id: 9 } });
    });

    it("should set the state of typeId to the id passed in", () => {
      expect(wrapper.state("typeId")).toEqual(0);
      instance.setTypeId({ target: { id: 9 } });
      expect(wrapper.state("typeId")).toEqual(9);
    });

    it("should invoke 'handleClickChange' with the correct params", () => {
      let MockFn = jest.spyOn(instance, "handleClickChange");
      instance.setTypeId({ target: { id: 9 } });
      expect(MockFn).toHaveBeenCalledWith(9);
    });
  });

  describe("handleClickChange", () => {
    it("should invoke 'filterStudioId' with the correct params", () => {
      let MockFn = jest.spyOn(instance, "filterStudioId");
      instance.handleClickChange(9);
      expect(MockFn).toHaveBeenCalledWith(9);
    });

    it("should invoke 'storeRendered' with the correct params", () => {
      instance.handleClickChange(9);
      expect(mockStoreRendered).toHaveBeenCalledWith([]);
    });

    it("should invoke 'storeEmptyType' with correct message when userInput is 9 or 10", () => {
      instance.handleClickChange(9);
      expect(mockStoreEmptyType).toHaveBeenCalledWith(
        "Sorry but the style of yoga you choose is not currently being offered at any studios, please check back or choose another style."
      );
    });

    it("should invoke 'storeEmptyType' with correct message when userInput is anything but 9 or 10", () => {
      instance.handleClickChange(4);
      expect(mockStoreEmptyType).toHaveBeenCalledWith("");
    });

    it("should invoke 'filterStudioId' with correct params if userInput is anything but 9 or 10", () => {
      let MockFn = jest.spyOn(instance, "filterStudioId");
      instance.handleClickChange(4);
      expect(MockFn).toHaveBeenCalledWith(4);
    });

    it("should finially invoke 'storeRendered' with the correct param if userInput is anything but 9 or 10", () => {
      instance.handleClickChange(4);
      expect(mockStoreRendered).toHaveBeenCalledWith([]);
    });
  });

  describe("filterStudioId", () => {
    it("should return the correct value when invoked", () => {
      const result = instance.filterStudioId(5);
      expect(result).toEqual(mockStudio);
    });
  });
});
