import {BrowserRouter} from "react-router-dom";
import React from "react";
import renderer from "react-test-renderer";
import Error from "./error.jsx";

it(`Error is rendered correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Error/>
      </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
