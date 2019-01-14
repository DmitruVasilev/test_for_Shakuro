/* eslint-env jest */
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import OperatorList from "./OperatorList";

const operatorsMock = {
  operators: [
    {
      id: "1",
      title: "MTS",
      icon_url: "https://citycard.ru/i/landing-features/operator-mts.svg"
    },
    {
      id: "2",
      title: "Megafon",
      icon_url: "https://citycard.ru/i/landing-features/operator-megafon.svg"
    },
    {
      id: "3",
      title: "Beeline",
      icon_url: "https://citycard.ru/i/landing-features/beeline.svg"
    }
  ]
};

describe("<OperatorList />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <OperatorList {...operatorsMock} />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <OperatorList {...operatorsMock} />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
