import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button";

test("Link changes the class when hovered", () => {
  const component = renderer.create(<Button text="=" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
