import FilmCard from "./film-card.jsx";
import React from "react";
import renderer from "react-test-renderer";

const film = {
  image: `img/snatch.jpg`,
  preview: `img/snatch.jpg`,
  title: `Snatch`,
};

it(`FilmCard is rendered correctly`, () => {
  const tree = renderer.create(
      <FilmCard
        film={film}
        index={Math.random(7)}
        onClick={() => {}}
        onHover={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
