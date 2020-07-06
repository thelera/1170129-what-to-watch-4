import {Genre, SHOWING_FILMS_COUNT_ON_START} from "./utils/consts.js";
import {getFilmsByFilter, getSimilarFilmsByGenres} from "./utils/common.js";
import films from "./mocks/films.js";

const initialState = {
  allFilms: films,
  genre: Genre.ALL,
  id: -1,
  promoFilm: films[0],
  showedFilmsCount: SHOWING_FILMS_COUNT_ON_START,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  CHANGE_FILM_ID: `CHANGE_FILM_ID`,
  INCREMENT_SHOWED_FILMS_COUNT: `INCREMENT_SHOWED_FILMS_COUNT`,
  SET_SHOWED_FILMS_COUNT: `SET_SHOWED_FILMS_COUNT`,
};

const ActionCreator = {
  genreAction: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  filmIdAction: (id) => ({
    type: ActionType.CHANGE_FILM_ID,
    payload: id,
  }),
  filmsCountAction: (count) => ({
    type: ActionType.SET_SHOWED_FILMS_COUNT,
    payload: count,
  }),
  incrementFilmsCountAction: (count) => ({
    type: ActionType.INCREMENT_SHOWED_FILMS_COUNT,
    payload: count,
  }),
};

const Selector = {
  getFilmById: (state) => state.allFilms.find((film) => film.id === state.id),
  getFilmsListByGenre: (state) => getFilmsByFilter(state.allFilms, state.genre),
  getFilmsListByGenres: (state) => getSimilarFilmsByGenres(state.allFilms, Selector.getFilmById(state)),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign({}, state, {genre: action.payload});
    case ActionType.CHANGE_FILM_ID:
      return Object.assign({}, state, {id: action.payload});
    case ActionType.SET_SHOWED_FILMS_COUNT:
      return Object.assign({}, state, {showedFilmsCount: action.payload});
    case ActionType.INCREMENT_SHOWED_FILMS_COUNT:
      return Object.assign({}, state, {showedFilmsCount: state.showedFilmsCount + action.payload});
    default:
      return state;
  }
};

export {ActionCreator, ActionType, reducer, Selector};
