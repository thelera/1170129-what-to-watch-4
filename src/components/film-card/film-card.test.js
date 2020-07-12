import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {FilmCard} from "./film-card.jsx";
import React from "react";
import renderer from "react-test-renderer";

const mockStore = configureStore([]);

const film = {
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  director: `David Yates`,
  genre: `Fantasy`,
  id: 345712414,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  ratingScore: 7.2,
  ratingCount: 248,
  runTime: 231,
  starring: [`Eddie Redmayne`, `Katherine Waterson`, `Dan Folger`],
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  year: 2015,
};

it(`FilmCard is rendered correctly`, () => {
  const store = mockStore({});

  const tree = renderer.create(
      <Provider store={store}>
        <FilmCard
          film={film}
          isPlaying={true}
          onClick={() => { }}
          onMouseEnter={() => { }}
          onMouseLeave={() => { }}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
