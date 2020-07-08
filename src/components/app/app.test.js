import React from "react";
import {App} from "./app.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";

const mockStore = configureStore([]);

const filmData = {
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  description: [
    `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  ],
  director: [`David Yates`],
  genres: [`Fantasy`, `Kid's and Family`, `Adventure`, `Story`],
  id: `1mfkemfkelf`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  ratingScore: 7.2,
  ratingLevel: `good`,
  ratingCount: 248,
  runTime: `1h 55m`,
  starring: [`Eddie Redmayne`, `Katherine Waterson`, `Dan Folger`],
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  year: 2015,
};

const films = [
  {
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: [`David Yates`],
    genres: [`Fantasy`, `Kid's and Family`, `Adventure`, `Story`],
    id: `1mfkemfkelf`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 7.2,
    ratingLevel: `good`,
    ratingCount: 248,
    runTime: `1h 55m`,
    starring: [`Eddie Redmayne`, `Katherine Waterson`, `Dan Folger`],
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    year: 2015,
  },
  {
    backgroundImage: `img/bohemian-rhapsody.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: [`Brayan Singer`],
    genres: [`Story`, `Drama`],
    id: String(new Date() + Math.random()),
    image: `img/bohemian-rhapsody.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 7.4,
    ratingLevel: `good`,
    ratingCount: 150,
    runTime: `1h 55m`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    title: `Bohemian Rhapsody`,
    year: 2018,
  },
  {
    backgroundImage: `img/macbeth.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: [`Brayan Singer`],
    genres: [`Biography`, `Music`, `Drama`],
    id: String(new Date() + Math.random()),
    image: `img/macbeth.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 6.9,
    ratingLevel: `normal`,
    ratingCount: 548,
    runTime: `1h 55m`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    title: `Macbeth`,
    year: 2010,
  },
  {
    backgroundImage: `img/aviator.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: [`Martin Scoresese`],
    genres: [`Biography`, `Drama`, `Story`],
    id: String(new Date() + Math.random()),
    image: `img/aviator.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 8.9,
    ratingLevel: `very good`,
    ratingCount: 140,
    runTime: `1h 55m`,
    starring: [`Leonardo DiCaprio`, `Cate Blanchett`, `Matt Ross`],
    title: `Aviator`,
    year: 2011,
  },
  {
    backgroundImage: `img/we-need-to-talk-about-kevin.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: [`Linn Ramsy`],
    genres: [`Thriller`, `Detective`, `Drama`],
    id: String(new Date() + Math.random()),
    image: `img/we-need-to-talk-about-kevin.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    ratingScore: 9.5,
    ratingLevel: `excellent`,
    ratingCount: 200,
    runTime: `1h 55m`,
    starring: [`Tilda Swinton`, `Jonh Reilly`, `Erza Miller`],
    title: `We Need To Talk About Kevin`,
    year: 2010,
  },
];

it(`App is rendered correctly`, () => {
  const store = mockStore({
    allFilms: films,
    id: `1mfkemfkelf`,
    film: filmData,
    filmsCount: 5,
    key: `vddssdg`,
    promoFilm: filmData,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          film={filmData}
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
