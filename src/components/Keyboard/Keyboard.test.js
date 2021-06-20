import React from "react";
import renderer from "react-test-renderer";
import Keyboard from "./Keyboard";

test("Keyboard should render correctly", () => {
  const component = renderer.create(<Keyboard />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
