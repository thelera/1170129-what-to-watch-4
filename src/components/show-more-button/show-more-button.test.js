import * as React from "react";
import renderer from "react-test-renderer";
import {ShowMoreButton} from "./show-more-buttonx";

it(`ShowMoreButton is rendered correctly`, () => {
  const tree = renderer.create(
      <ShowMoreButton
        onClick={() => { }}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
