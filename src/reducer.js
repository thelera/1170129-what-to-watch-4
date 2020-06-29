import {Genre} from "./utils/consts.js";
import {getFilmsByFilter} from "./utils/common.js";
import films from "./mocks/films.js";

const initialState = {
  allFilms: films,
  genre: Genre.ALL,
  films: films,
  index: -1,
  promoFilm: films[0],
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILM_LIST_BY_GENRE: `FILM_LIST_BY_GENRE`,
  GET_FILM_DETAILS: `GET_FILM_DETAILS`,
};

const ActionCreator = {
  changeGenreAction: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmListByGenreAction: (films, genre) => ({
    type: ActionType.GET_FILM_LIST_BY_GENRE,
    payload: getFilmsByFilter(films, genre),
  }),
  getFilmDetails: (index) => ({
    type: ActionType.GET_FILM_DETAILS,
    payload: index,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign({}, state, {genre: action.payload});
    case ActionType.GET_FILM_LIST_BY_GENRE:
      return Object.assign({}, state, {films: action.payload});
    case ActionType.GET_FILM_DETAILS:
      return Object.assign({}, state, {index: action.payload});
    default:
      return state;
  }
};

export {ActionCreator, ActionType, reducer};
