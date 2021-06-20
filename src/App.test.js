import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

test("Main App should render correctly", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
