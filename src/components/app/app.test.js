import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

it(`Render App`, () => {
  const tree = renderer.create(
      <App
        filmName={filmData.name}
        filmGenre={filmData.genre}
        filmYear={filmData.year}
        filmsInfo={films}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
