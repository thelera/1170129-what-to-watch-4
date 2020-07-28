import * as React from "react";
import renderer from "react-test-renderer";
import withTimerOnHover from "./with-timer-on-hover";

const MockComponent = () => <article />;

const MockComponentWrapped = withTimerOnHover(MockComponent);

it(`withFilmCard is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      isPlaying={false}
      onMouseEnter={() => { }}
      onMouseLeave={() => { }}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
