import * as React from "react";
import * as renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import Footer from "./footer";

it(`Footer is rendered correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Footer
          isMain={true}
        />
      </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
