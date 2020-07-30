import * as React from "react";
import * as renderer from "react-test-renderer";
import {AuthorizationStatus} from "../../types";
import {BrowserRouter} from "react-router-dom";
import {PrivateRoute} from "./private-route";

it(`PrivateRoute is rendered correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <PrivateRoute
          authorizationStatus={AuthorizationStatus.AUTH}
          exact={true}
          path={`path`}
          render={() => null}
        />
      </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
