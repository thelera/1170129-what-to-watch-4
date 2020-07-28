import {BrowserRouter} from "react-router-dom";
import * as React from "react";
import renderer from "react-test-renderer";
import Error from "./errorx";

it(`Error is rendered correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Error/>
      </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
