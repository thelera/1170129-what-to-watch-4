import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

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

it(`<Main/> should render movie card and films catalog`, () => {
  const tree = renderer.create(
      <Main
        name={filmData.name}
        genre={filmData.genre}
        year={filmData.year}
        filmNames={FILM_NAMES}
        onTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
