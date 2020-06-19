import FilmCard from "./film-card.jsx";
import React from "react";
import renderer from "react-test-renderer";

const film = {
  image: `img/snatch.jpg`,
  title: `Snatch`,
};

it(`FilmCard is rendered correctly`, () => {
  const tree = renderer.create(
      <FilmCard
        image={film.image}
        title={film.title}
        index={Math.random(7)}
        onClick={() => {}}
        onHover={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
