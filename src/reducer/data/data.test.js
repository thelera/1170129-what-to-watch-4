import MockAdapter from "axios-mock-adapter";
import {createFilm, createFilms} from "../../adapters/films.js";
import {createApi} from "../../api.js";
import {Genre, SHOWING_FILMS_COUNT_ON_START} from "../../utils/consts.js";
import {reducer, ActionCreator, ActionType, Operation} from "./data.js";

const api = createApi(() => {});

const films = [
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
    id: 3,
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
    id: 4,
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
    id: 5,
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

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    allFilms: null,
    genre: Genre.ALL,
    favouriteFilms: [],
    promoFilm: {},
    showedFilmsCount: SHOWING_FILMS_COUNT_ON_START,
  });
});

it(`Reducer should change key "genre" by a given value`, () => {
  expect(reducer({
    allFilms: films,
    genre: `All films`,
    promoFilm: films[0],
    showedFilmsCount: 15,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Action`,
  })).toEqual({
    allFilms: films,
    genre: `Action`,
    promoFilm: films[0],
    showedFilmsCount: 8,
  });

  expect(reducer({
    allFilms: films,
    genre: `Adventure`,
    promoFilm: films[0],
    showedFilmsCount: 8,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: null,
  })).toEqual({
    allFilms: films,
    genre: null,
    promoFilm: films[0],
    showedFilmsCount: 8,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.changeGenre(`Sci-fi`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Sci-fi`,
    });
  });
});

describe(`Operation works correctly`, () => {
  it(`Should make a correct Api call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: false}]);

    return filmsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_FILMS,
          payload: createFilms([{fake: true}]),
        });
      });
  });

  it(`Should make a correct Api call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadPromoFilm();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, {fake: false});

    return filmsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_PROMO_FILM,
          payload: createFilm({fake: true}),
        });
      });
  });
});
