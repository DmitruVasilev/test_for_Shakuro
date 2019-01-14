/* eslint-env jest */
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import PayCaption from "./PayCaption";

const operatorsMock = {
  title: "MTS",
  icon_url: "https://citycard.ru/i/landing-features/operator-mts.svg"
};

describe("<OperatorList />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PayCaption {...operatorsMock} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<PayCaption {...operatorsMock} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
