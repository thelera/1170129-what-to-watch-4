import {Genre, SHOWING_FILMS_COUNT_ON_START} from "./utils/consts.js";
import {getFilmsByFilter} from "./utils/common.js";
import films from "./mocks/films.js";
import {createFilms} from "./adapters/films.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  allFilms: [],
  genre: Genre.ALL,
  id: -1,
  promoFilm: films[0],
  showedFilmsCount: SHOWING_FILMS_COUNT_ON_START,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  CHANGE_FILM_ID: `CHANGE_FILM_ID`,
  INCREMENT_SHOWED_FILMS_COUNT: `INCREMENT_SHOWED_FILMS_COUNT`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
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
  incrementOfFilmsCountAction: (count) => ({
    type: ActionType.INCREMENT_SHOWED_FILMS_COUNT,
    payload: count,
  }),
  loadOfMovies: (films) => {
    console.log(createFilms(films));
    return {
      type: ActionType.LOAD_MOVIES,
      payload: createFilms(films),
    };
  },
  requireOfAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
};

const Operation = {
  loadOfMovies: () => (dispatch, getState, api) => {
    return api.get(`https://4.react.pages.academy/wtw/films`)
    .then((response) => {
      console.log(response);
      dispatch(ActionCreator.loadOfMovies(response.data));
    });
  },
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
    .then(() => {
      dispatch(ActionCreator.requireOfAuthorization(AuthorizationStatus.AUTH))
    })
    .catch((error) => {
      throw error;
    })
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`login`, {
      email: authData.login,
      password: authData.password,
    })
    .then(() => {
      dispatch(ActionCreator.requireOfAuthorization(AuthorizationStatus.AUTH))
    })
  },
}

const Selector = {
  getFilmById: (state) => state.allFilms.find((film) => film.id === state.id),
  getFilmsListByGenre: (state) => getFilmsByFilter(state.allFilms, state.genre),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign({}, state, {
        genre: action.payload,
        showedFilmsCount: SHOWING_FILMS_COUNT_ON_START,
      });
    case ActionType.CHANGE_FILM_ID:
      return Object.assign({}, state, {id: action.payload});
    case ActionType.INCREMENT_SHOWED_FILMS_COUNT:
      return Object.assign({}, state, {showedFilmsCount: state.showedFilmsCount + action.payload});
    case ActionType.LOAD_MOVIES:
      return Object.assign({}, state, {allFilms: action.payload});
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {authorizationStatus: action.payload});
    default:
      return state;
  }
};

export {ActionCreator, ActionType, Operation, reducer, Selector};
