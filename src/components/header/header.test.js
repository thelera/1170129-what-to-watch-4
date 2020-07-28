import {BrowserRouter} from "react-router-dom";
import * as React from "react";
import renderer from "react-test-renderer";
import {Header} from "./headerx";

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
