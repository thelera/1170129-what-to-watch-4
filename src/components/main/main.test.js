import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const filmData = {
  name: `No Country for Old Men`,
  genre: `Action`,
  year: 2005,
};

const films = [
  {
    title: `Bekket`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    title: `The Doom Generation`,
    image: `img/bohemian-rhapsody.jpg`,
  },
  {
    title: `Patrool`,
    image: `img/macbeth.jpg`,
  },
];

it(`<Main/> should render movie card and films catalog`, () => {
  const tree = renderer.create(
      <Main
        name={filmData.name}
        genre={filmData.genre}
        year={filmData.year}
        films={films}
        onClick={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
