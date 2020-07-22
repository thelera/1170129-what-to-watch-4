import {BrowserRouter} from "react-router-dom";
import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer.jsx";

it(`Footer is rendered correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Footer/>
      </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
