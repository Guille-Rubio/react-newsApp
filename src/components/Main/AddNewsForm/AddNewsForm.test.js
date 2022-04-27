import React from "react";
import { shallow } from "enzyme";
import AddNewsForm from "./AddNewsForm";

describe("AddNewsForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AddNewsForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
