import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {FilmDetails} from "./film-details.jsx";
import NameSpace from "../../reducer/name-space.js";
import {Provider} from "react-redux";
import React from "react";
import renderer from "react-test-renderer";

const mockStore = configureStore([]);

const comments = [
  {
    comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 7,
    rating: 11,
    user: {
      id: 11.7,
      name: `Pete`,
    }
  },
  {
    comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 74,
    rating: 1,
    user: {
      id: 2,
      name: `Ann`,
    }
  },
  {
    comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 0,
    rating: 131,
    user: {
      id: 7,
      name: `George`,
    }
  },
];

const film = {
  backgroundColor: `#E45322`,
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  director: `David Yates`,
  genre: `Fantasy`,
  id: 345712414,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  isFavourite: true,
  preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  ratingScore: 7.2,
  ratingCount: 248,
  runTime: 231,
  starring: [`Eddie Redmayne`, `Katherine Waterson`, `Dan Folger`],
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  year: 2015,
};

const films = [
  {
    backgroundColor: `#444444`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `David Yates`,
    genre: `Fantasy`,
    id: 3523525245235,
    isFavourite: true,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 7.2,
    ratingCount: 248,
    runTime: 223,
    starring: [`Eddie Redmayne`, `Katherine Waterson`, `Dan Folger`],
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    year: 2015,
  },
  {
    backgroundColor: `#444444`,
    backgroundImage: `img/bohemian-rhapsody.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Brayan Singer`,
    genre: `Story`,
    id: Math.random(),
    isFavourite: true,
    image: `img/bohemian-rhapsody.jpg`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 7.4,
    ratingLevel: `good`,
    ratingCount: 150,
    runTime: 432,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    title: `Bohemian Rhapsody`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    year: 2018,
  },
  {
    backgroundColor: `#444444`,
    backgroundImage: `img/macbeth.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Brayan Singer`,
    genre: `Biography`,
    id: Math.random(),
    isFavourite: true,
    image: `img/macbeth.jpg`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 6.9,
    ratingLevel: `normal`,
    ratingCount: 548,
    runTime: 64,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    title: `Macbeth`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    year: 2010,
  },
  {
    backgroundColor: `#444444`,
    backgroundImage: `img/aviator.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Martin Scoresese`,
    genre: `Biography`,
    id: Math.random(),
    isFavourite: true,
    image: `img/aviator.jpg`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 8.9,
    ratingLevel: `very good`,
    ratingCount: 140,
    runTime: 213,
    starring: [`Leonardo DiCaprio`, `Cate Blanchett`, `Matt Ross`],
    title: `Aviator`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    year: 2011,
  },
  {
    backgroundColor: `#444444`,
    backgroundImage: `img/we-need-to-talk-about-kevin.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Linn Ramsy`,
    genre: `Detective`,
    id: Math.random(),
    isFavourite: true,
    image: `img/we-need-to-talk-about-kevin.jpg`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 9.5,
    ratingLevel: `excellent`,
    ratingCount: 200,
    runTime: 154,
    starring: [`Tilda Swinton`, `Jonh Reilly`, `Erza Miller`],
    title: `We Need To Talk About Kevin`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    year: 2010,
  },
];

it(`FilmDetails is rendered correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      allFilms: films,
      onTabClick: () => {},
    },
  });

  const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <FilmDetails
            authorizationStatus={`AUTH`}
            comments={comments}
            film={film}
            filmsList={films}
            key={film.id}
            loadComments={() => {}}
            onAddToMyListClick={() => {}}
            onActiveClick={() => {}}
          />
        </Provider>
      </BrowserRouter>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
