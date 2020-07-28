import {BrowserRouter} from "react-router-dom";
import {PrivateRoute} from "./private-routex";
import * as React from "react";
import renderer from "react-test-renderer";

it(`PrivateRoute is rendered correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <PrivateRoute
          authorizationStatus={`AUTH`}
          exact={true}
          path={`path`}
          render={() => {}}
        />
      </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
