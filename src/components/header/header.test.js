import {BrowserRouter} from "react-router-dom";
import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header.jsx";

it(`Header is rendered correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Header
          authorizationStatus={`AUTH`}
          avatarImage={`image`}
        />
      </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
