import FilmList from "./film-list.jsx";
import React from "react";
import renderer from "react-test-renderer";

const films = [
  {
    image: `img/snatch.jpg`,
    title: `Snatch`,
  },
  {
    image: `img/aviator.jpg`,
    title: `Aviator`,
  },
  {
    image: `img/avatar.jpg`,
    title: `Avatar`,
  }
];

it(`FilmList is rendered correctly`, () => {
  const tree = renderer.create(
      <FilmList
        films={films}
        onClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
