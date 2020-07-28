import {BrowserRouter} from "react-router-dom";
import * as React from "react";
import renderer from "react-test-renderer";
import Footer from "./footerx";

it(`Footer is rendered correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Footer/>
      </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
