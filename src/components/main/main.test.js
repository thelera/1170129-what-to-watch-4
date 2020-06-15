import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx"

const filmData = {
  name: `No Country for Old Men`,
  genre: `Action`,
  year: 2005,
};

const FILM_NAMES = [
  `The Man Who Would Be King`,
  `Becket`,
  `The Act Of Killing`,
  `They Shoot Horses, Don't They?`,
  `Donnie Darko`,
  `The Doom Generation`,
  `Smiley Face`,
];

it(`<Main/> should render movie card and films catalog`, () => {
  const tree = renderer.create(
    <Main
      name = {filmData.name}
      genre = {filmData.genre}
      year = {filmData.year}
      filmNames = {FILM_NAMES}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});