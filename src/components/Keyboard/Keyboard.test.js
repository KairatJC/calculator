import React from "react";
import renderer from "react-test-renderer";
import Keyboard from "./Keyboard";

test("Link changes the class when hovered", () => {
  const component = renderer.create(<Keyboard />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
