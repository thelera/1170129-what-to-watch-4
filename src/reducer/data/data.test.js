import MockAdapter from "axios-mock-adapter";
import {createFilm, createFilms} from "../../adapters/films";
import {createApi} from "../../api";
import {Genre} from "../../types";
import {SHOWING_FILMS_COUNT_ON_START} from "../../utils/consts";
import {reducer, ActionCreator, ActionType, Operation} from "./data";

const api = createApi(() => null, () => null);

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

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    allFilms: null,
    genre: Genre.ALL,
    favouriteFilms: [],
    promoFilm: {},
    showedFilmsCount: SHOWING_FILMS_COUNT_ON_START,
  });
});

it(`Reducer should update films by set films`, () => {
  expect(reducer({
    allFilms: [],
  }, {
    type: ActionType.SET_FILMS,
    payload: films,
  })).toEqual({
    allFilms: films,
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

it(`Reducer should update favourite films by favourite films`, () => {
  expect(reducer({
    favouriteFilms: [],
  }, {
    type: ActionType.FAVOURITE_FILMS,
    payload: films,
  })).toEqual({
    favouriteFilms: films,
  });
});

it(`Reducer should update promo film films by set promo film`, () => {
  expect(reducer({
    promoFilm: {},
  }, {
    type: ActionType.SET_PROMO_FILM,
    payload: films[1],
  })).toEqual({
    promoFilm: films[1],
  });
});

it(`Reducer should increment showed films count by increment showed films count`, () => {
  expect(reducer({
    showedFilmsCount: 10,
  }, {
    type: ActionType.INCREMENT_SHOWED_FILMS_COUNT,
    payload: 5,
  })).toEqual({
    showedFilmsCount: 15,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.changeGenre(`Sci-fi`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Sci-fi`,
    });
  });

  it(`Action creator for incrementing films count returns correct action`, () => {
    expect(ActionCreator.incrementFilmsCount(5)).toEqual({
      type: ActionType.INCREMENT_SHOWED_FILMS_COUNT,
      payload: 5,
    });
  });

  it(`Action creator for loading favourites films returns correct action`, () => {
    expect(ActionCreator.favouriteFilms(films)).toEqual({
      type: ActionType.FAVOURITE_FILMS,
      payload: films,
    });
  });

  it(`Action creator for setting films returns correct action`, () => {
    expect(ActionCreator.setFilms(films)).toEqual({
      type: ActionType.SET_FILMS,
      payload: films,
    });
  });

  it(`Action creator for setting promo film returns correct action`, () => {
    expect(ActionCreator.setPromoFilm(films[0])).toEqual({
      type: ActionType.SET_PROMO_FILM,
      payload: films[0],
    });
  });

  it(`Action creator for updating promo film returns correct action`, () => {
    expect(ActionCreator.updatePromoFilm(films[0])).toEqual({
      type: ActionType.UPDATE_PROMO_FILM,
      payload: films[0],
    });
  });

  it(`Action creator for updating films returns correct action`, () => {
    expect(ActionCreator.updateFilms(films)).toEqual({
      type: ActionType.UPDATE_FILMS,
      payload: films,
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

    return filmsLoader(dispatch, () => null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
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

    return filmsLoader(dispatch, () => null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_PROMO_FILM,
          payload: createFilm({fake: true}),
        });
      });
  });

  it(`Should make a correct Api call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFavouriteFilms();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: false}]);

    return filmsLoader(dispatch, () => null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FAVOURITE_FILMS,
          payload: createFilms([{fake: true}]),
        });
      });
  });

  it(`Should make a correct Api call to /favorite/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.addFilmToFavourites(5, false);

    apiMock
      .onPost(`/favorite/5/1`)
      .reply(200, {fake: false});

    return filmsLoader(dispatch, () => null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_PROMO_FILM,
          payload: createFilm({fake: true}),
        });
      });
  });
});
