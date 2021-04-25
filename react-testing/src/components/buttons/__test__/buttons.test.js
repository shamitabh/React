import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Buttons from "../buttons";
import TestRenderer from "react-test-renderer";

// remove the divs created as part of the test cases after each test
afterEach(cleanup);

test("renders without crashing - appraoch 1", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Buttons />, div);
});

test("renders without crashing - appraoch 2", () => {
  render(<Buttons />);
});

test("renders Button correctly", () => {
  // getByTextId method comes from the use of dat-testid in the divs within Button component
  const { getByTestId } = render(<Buttons label="save" />);
  expect(getByTestId("buttons")).toHaveTextContent("save");
});

// refer to the youtube video for snapshot
test("matches snapshot", () => {
  // toJSON creates a javascript object for the HTML elements rendered
  const tree = TestRenderer.create(<Buttons />).toJSON();
  expect(tree).toMatchSnapshot();
});
