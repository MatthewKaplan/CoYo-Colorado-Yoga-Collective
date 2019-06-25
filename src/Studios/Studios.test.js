import React from "react";
import Studios from "./Studios";
import { shallow } from "enzyme";
import MockData from "../Helper/mockData";

let mockRendered = MockData.mockStudios;
const mockStudios = MockData.mockStudios;
const mockRender = jest.fn();

describe("Studios", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Studios
        renderDisplay={mockRender}
        rendered={mockRendered}
        studios={mockStudios}
      />
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot when rendered length is is zero", () => {
    mockRendered = [];
    wrapper = shallow(
      <Studios
        renderDisplay={mockRender}
        rendered={mockRendered}
        studios={mockStudios}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
