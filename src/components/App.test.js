/* eslint-env jest */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

jest.mock("./PayPage", () => () => "PayPage");
jest.mock("./WelcomePage", () => () => "WelcomePage");

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
