import {Genre} from "./utils/consts.js";
import {getFilmsByFilter, getSimilarFilmsByGenres} from "./utils/common.js";
import films from "./mocks/films.js";

const initialState = {
  allFilms: films,
  genre: Genre.ALL,
  filmsList: films,
  index: -1,
  promoFilm: films[0],
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS_LIST_BY_GENRE: `FILM_LIST_BY_GENRE`,
  GET_FILMS_LIST_BY_GENRES: `FILM_LIST_BY_GENRES`,
  GET_FILM_DETAILS: `GET_FILM_DETAILS`,
};

const ActionCreator = {
  changeGenreAction: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmsListByGenreAction: (movies, genre) => ({
    type: ActionType.GET_FILMS_LIST_BY_GENRE,
    payload: getFilmsByFilter(movies, genre),
  }),
  getFilmsListByGenresAction: (movies, movie) => ({
    type: ActionType.GET_FILMS_LIST_BY_GENRE,
    payload: getSimilarFilmsByGenres(movies, movie),
  }),
  getFilmDetailsAction: (index) => ({
    type: ActionType.GET_FILM_DETAILS,
    payload: index,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign({}, state, {genre: action.payload});
    case ActionType.GET_FILMS_LIST_BY_GENRE:
      return Object.assign({}, state, {filmsList: action.payload});
    case ActionType.GET_FILMS_LIST_BY_GENRES:
      return Object.assign({}, state, {filmsList: action.payload});
    case ActionType.GET_FILM_DETAILS:
      return Object.assign({}, state, {index: action.payload});
    default:
      return state;
  }
};

export {ActionCreator, ActionType, reducer};
