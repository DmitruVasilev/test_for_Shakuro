/* eslint-env jest */
import React from "react";
import ReactDOM from "react-dom";
import WelcomePage from "./WelcomePage";

jest.mock("./OperatorList", () => () => "OperatorList");

describe("<WelcomePage />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<WelcomePage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
