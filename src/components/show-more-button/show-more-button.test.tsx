import * as React from "react";
import * as renderer from "react-test-renderer";
import {ShowMoreButton} from "./show-more-button";

it(`ShowMoreButton is rendered correctly`, () => {
  const tree = renderer.create(
      <ShowMoreButton
        onClick={() => null}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
