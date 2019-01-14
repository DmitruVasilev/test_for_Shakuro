/* eslint-env jest */
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import PayForm from "./PayForm";

const operatorsMock = {
  handleRedirect: jest.fn()
};

describe("<PayForm />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PayForm {...operatorsMock} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<PayForm {...operatorsMock} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
