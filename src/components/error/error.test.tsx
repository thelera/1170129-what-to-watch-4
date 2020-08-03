import * as React from "react";
import * as renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import Error from "./error";

it(`Error is rendered correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Error
          message={`new error`}
        />
      </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
