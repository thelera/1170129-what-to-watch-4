import React from "react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const mockStore = configureStore([]);

const filmData = {
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genres: [`Horror`],
  title: `No Country for Old Men`,
  year: 2005,
};

const films = [
  {
    title: `Bekket`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `The Doom Generation`,
    image: `img/bohemian-rhapsody.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Patrool`,
    image: `img/macbeth.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
];

it(`Main should render movie card and films catalog`, () => {
  const store = mockStore({
    allFilms: films,
    genre: `All genres`,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Main
          filmsList={films}
          promoFilm={filmData}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
