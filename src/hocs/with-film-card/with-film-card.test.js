import React from "react";
import renderer from "react-test-renderer";
import withFilmCard from "./with-film-card.js";

const MockComponent = () => <article />;

const MockComponentWrapped = withFilmCard(MockComponent);

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
