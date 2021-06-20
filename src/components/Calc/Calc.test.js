import React from "react";
import renderer from "react-test-renderer";
import Calc from "./Calc";

test("Link changes the class when hovered", () => {
  const component = renderer.create(<Calc />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
