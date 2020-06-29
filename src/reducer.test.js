import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {getFilmsByFilter} from "./utils/common.js";

const films = [
  {
    backgroundImage: `img/aviator.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: [`Martin Scoresese`],
    genres: [`Biography`, `Drama`, `Story`],
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
  {
    backgroundImage: `img/what-we-do-in-the-shadows.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: [`Jemaine Clement`, `Taika Waititi`],
    genres: [`Comedy`],
    image: `img/what-we-do-in-the-shadows.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    ratingScore: 7.0,
    ratingLevel: `good`,
    ratingCount: 41,
    runTime: `1h 55m`,
    starring: [`Jemaine Clement`, `Taika Waititi`, `Jonny Brugh`],
    title: `What We Do In The Shadows`,
    year: 2014,
  },
];

it(`Reducer should change key "genre" by a given value`, () => {
  expect(reducer({
    allFilms: films,
    genre: `All films`,
    filmsList: films,
    index: -1,
    promoFilm: films[0],
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Action`,
  })).toEqual({
    allFilms: films,
    genre: `Action`,
    filmsList: films,
    index: -1,
    promoFilm: films[0],
  });

  expect(reducer({
    allFilms: films,
    genre: `Adventure`,
    filmsList: films,
    index: -1,
    promoFilm: films[0],
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: null,
  })).toEqual({
    allFilms: films,
    genre: null,
    filmsList: films,
    index: -1,
    promoFilm: films[0],
  });
});

it(`Reducer should change "filmList" key by a given value`, () => {
  expect(reducer({
    allFilms: films,
    genre: `Adventure`,
    filmsList: films,
    index: -1,
    promoFilm: films[0],
  }, {
    type: ActionType.GET_FILM_LIST_BY_GENRE,
    payload: getFilmsByFilter(films, `Drama`),
  })).toEqual({
    allFilms: films,
    genre: `Adventure`,
    filmsList: getFilmsByFilter(films, `Drama`),
    index: -1,
    promoFilm: films[0],
  });

  expect(reducer({
    allFilms: films,
    genre: `Adventure`,
    filmsList: films,
    index: 3,
    promoFilm: films[2],
  }, {
    type: ActionType.GET_FILM_LIST_BY_GENRE,
    payload: films,
  })).toEqual({
    allFilms: films,
    genre: `Adventure`,
    filmsList: films,
    index: 3,
    promoFilm: films[2],
  });
});

it(`Reducer should change key "index" by a given value`, () => {
  expect(reducer({
    allFilms: films,
    genre: `Adventure`,
    filmsList: films,
    index: -1,
    promoFilm: films[2],
  }, {
    type: ActionType.GET_FILM_DETAILS,
    payload: 1,
  })).toEqual({
    allFilms: films,
    genre: `Adventure`,
    filmsList: films,
    index: 1,
    promoFilm: films[2],
  });

  expect(reducer({
    allFilms: films,
    genre: `Adventure`,
    filmsList: films,
    index: 3,
    promoFilm: films[2],
  }, {
    type: ActionType.GET_FILM_DETAILS,
    payload: 1,
  })).toEqual({
    allFilms: films,
    genre: `Adventure`,
    filmsList: films,
    index: 1,
    promoFilm: films[2],
  });

  expect(reducer({
    allFilms: films,
    genre: `Adventure`,
    filmsList: films,
    index: 3,
    promoFilm: films[2],
  }, {
    type: ActionType.GET_FILM_DETAILS,
    payload: null,
  })).toEqual({
    allFilms: films,
    genre: `Adventure`,
    filmsList: films,
    index: null,
    promoFilm: films[2],
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.changeGenreAction(`Sci-fi`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Sci-fi`,
    });
  });

  it(`Action creator for getting films list by genre returns action with 0 payload if answer for artist is correct`, () => {
    expect(ActionCreator.getFilmListByGenreAction(films, `Thriller`)).toEqual({
      type: ActionType.GET_FILM_LIST_BY_GENRE,
      payload: getFilmsByFilter(films, `Thriller`),
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
    expect(ActionCreator.getFilmDetails(2)).toEqual({
      type: ActionType.GET_FILM_DETAILS,
      payload: 2,
    });
  });
});
