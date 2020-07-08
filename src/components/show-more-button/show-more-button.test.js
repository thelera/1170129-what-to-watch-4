import React from "react";
import renderer from "react-test-renderer";
import {ShowMoreButton} from "./show-more-button.jsx";

it(`ShowMoreButton is rendered correctly`, () => {
  const tree = renderer.create(
      <ShowMoreButton
        onClick={() => { }}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
