import * as React from "react";
import * as renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {Film} from "../../types";
import {Provider} from "react-redux";
import {Main} from "./main";

const mockStore = configureStore([]);

const filmData: Film = {
  backgroundColor: `#444444`,
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  director: `David Yates`,
  genre: `Fantasy`,
  id: 1,
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
};

const films: Array<Film> = [
  {
    backgroundColor: `#444444`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `David Yates`,
    genre: `Fantasy`,
    id: 1,
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
    id: 2,
    isFavourite: true,
    image: `img/bohemian-rhapsody.jpg`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 7.4,
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
    id: 3,
    isFavourite: true,
    image: `img/macbeth.jpg`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 6.9,
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
    id: 4,
    isFavourite: true,
    image: `img/aviator.jpg`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 8.9,
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
    id: 5,
    isFavourite: true,
    image: `img/we-need-to-talk-about-kevin.jpg`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 9.5,
    ratingCount: 200,
    runTime: 154,
    starring: [`Tilda Swinton`, `Jonh Reilly`, `Erza Miller`],
    title: `We Need To Talk About Kevin`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    year: 2010,
  },
];

it(`Main should render movie card and films catalog`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      allFilms: films,
      genre: `All genres`,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      avatarURL: `url`,
    },
  });

  const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Main
            avatarImage={`image`}
            errorText={`error`}
            filmsCount={10}
            filmsList={films}
            promoFilm={filmData}
            onAddToMyListClick={() => null}
          />
        </Provider>
      </BrowserRouter>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
