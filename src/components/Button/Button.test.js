import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button";

test("Button should render correctly", () => {
  const component = renderer.create(<Button text="=" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
