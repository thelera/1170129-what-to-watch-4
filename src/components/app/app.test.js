import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const filmData = {
  name: `No Country for Old Men`,
  genre: `Action`,
  year: 2005,
};

const FILM_NAMES = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
];

it(`Render App`, () => {
  const tree = renderer.create(
      <App
        filmName={filmData.name}
        filmGenre={filmData.genre}
        filmYear={filmData.year}
        filmNames={FILM_NAMES}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
