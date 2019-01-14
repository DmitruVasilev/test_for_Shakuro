/* eslint-env jest */
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import PayPage from "./PayPage";

const matchMock = {
  match: {
    params: { operatorId: "1" }
  }
};

describe("<PayPage />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <PayPage {...matchMock} />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <PayPage {...matchMock} />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
