import React from "react";
import renderer from "react-test-renderer";
import Display from "./Display";

test("Calculator display should render correctly", () => {
  const component = renderer.create(<Display />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
