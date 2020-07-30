import * as React from "react";
import * as renderer from "react-test-renderer";
import {AuthorizationStatus} from "../../types";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./header";

it(`Header is rendered correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Header
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          avatarImage={`image`}
          className={`class`}
          isMain={false}
          isLinkToMyList={true}
          isUserBlock={true}
        >
          <div></div>
        </Header>
      </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
