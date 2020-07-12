import MockAdapter from "axios-mock-adapter";
import {createFilm, createFilms} from "../../adapters/films.js";
import {createAPI} from "../../api.js";
import {Genre, SHOWING_FILMS_COUNT_ON_START} from "../../utils/consts.js";
import {reducer, ActionCreator, ActionType, Operation} from "./data.js";

const api = createAPI(() => {});

const films = [
  {
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `David Yates`,
    genre: `Fantasy`,
    id: 3523525245235,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 7.2,
    ratingCount: 248,
    runTime: 223,
    starring: [`Eddie Redmayne`, `Katherine Waterson`, `Dan Folger`],
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    year: 2015,
  },
  {
    backgroundImage: `img/bohemian-rhapsody.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Brayan Singer`,
    genre: `Story`,
    id: Math.random(),
    image: `img/bohemian-rhapsody.jpg`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 7.4,
    ratingLevel: `good`,
    ratingCount: 150,
    runTime: 432,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    title: `Bohemian Rhapsody`,
    year: 2018,
  },
  {
    backgroundImage: `img/macbeth.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Brayan Singer`,
    genre: `Biography`,
    id: Math.random(),
    image: `img/macbeth.jpg`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 6.9,
    ratingLevel: `normal`,
    ratingCount: 548,
    runTime: 64,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    title: `Macbeth`,
    year: 2010,
  },
  {
    backgroundImage: `img/aviator.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Martin Scoresese`,
    genre: `Biography`,
    id: Math.random(),
    image: `img/aviator.jpg`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 8.9,
    ratingLevel: `very good`,
    ratingCount: 140,
    runTime: 213,
    starring: [`Leonardo DiCaprio`, `Cate Blanchett`, `Matt Ross`],
    title: `Aviator`,
    year: 2011,
  },
  {
    backgroundImage: `img/we-need-to-talk-about-kevin.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Linn Ramsy`,
    genre: `Detective`,
    id: Math.random(),
    image: `img/we-need-to-talk-about-kevin.jpg`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 9.5,
    ratingLevel: `excellent`,
    ratingCount: 200,
    runTime: 154,
    starring: [`Tilda Swinton`, `Jonh Reilly`, `Erza Miller`],
    title: `We Need To Talk About Kevin`,
    year: 2010,
  },
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    allFilms: [],
    genre: Genre.ALL,
    id: -1,
    isPlayerOpened: false,
    promoFilm: {},
    showedFilmsCount: SHOWING_FILMS_COUNT_ON_START,
  });
});

it(`Reducer should change key "genre" by a given value`, () => {
  expect(reducer({
    allFilms: films,
    genre: `All films`,
    id: `sdsd!sgdg35`,
    promoFilm: films[0],
    showedFilmsCount: 15,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Action`,
  })).toEqual({
    allFilms: films,
    genre: `Action`,
    id: `sdsd!sgdg35`,
    promoFilm: films[0],
    showedFilmsCount: 8,
  });

  expect(reducer({
    allFilms: films,
    genre: `Adventure`,
    id: `sdsd!sgdg35`,
    promoFilm: films[0],
    showedFilmsCount: 8,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: null,
  })).toEqual({
    allFilms: films,
    genre: null,
    id: `sdsd!sgdg35`,
    promoFilm: films[0],
    showedFilmsCount: 8,
  });
});

it(`Reducer should change key "id" by a given value`, () => {
  expect(reducer({
    allFilms: films,
    genre: `Adventure`,
    id: `sdsd!sgdg35`,
    promoFilm: films[2],
  }, {
    type: ActionType.CHANGE_FILM_ID,
    payload: `!!!sdsd!sgdg35dfdfdf`,
  })).toEqual({
    allFilms: films,
    genre: `Adventure`,
    id: `!!!sdsd!sgdg35dfdfdf`,
    promoFilm: films[2],
  });

  expect(reducer({
    allFilms: films,
    genre: `Adventure`,
    id: `dvdfvdfvv34234`,
    promoFilm: films[2],
  }, {
    type: ActionType.CHANGE_FILM_ID,
    payload: `vdvdfv`,
  })).toEqual({
    allFilms: films,
    genre: `Adventure`,
    id: `vdvdfv`,
    promoFilm: films[2],
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.genreAction(`Sci-fi`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Sci-fi`,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
    expect(ActionCreator.filmIdAction(`13sdfsf`)).toEqual({
      type: ActionType.CHANGE_FILM_ID,
      payload: `13sdfsf`,
    });
  });
});

describe(`Operation works correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadingOfMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: false}]);

    return filmsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: createFilms([{fake: true}]),
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadingOfPromoFilm();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, {fake: false});

    return filmsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: createFilm({fake: true}),
        });
      });
  });
});