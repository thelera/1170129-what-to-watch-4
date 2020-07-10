import {Genre, SHOWING_FILMS_COUNT_ON_START} from "../../utils/consts.js";
import {createFilm, createFilms} from "../../adapters/films.js";

const initialState = {
  allFilms: [],
  genre: Genre.ALL,
  id: -1,
  promoFilm: {},
  showedFilmsCount: SHOWING_FILMS_COUNT_ON_START,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  CHANGE_FILM_ID: `CHANGE_FILM_ID`,
  INCREMENT_SHOWED_FILMS_COUNT: `INCREMENT_SHOWED_FILMS_COUNT`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
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
  loadingOfMovies: (films) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: createFilms(films),
    };
  },
  loadingOfPromoFilm: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: createFilm(film),
    };
  },
};

const Operation = {
  loadingOfPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`https://4.react.pages.academy/wtw/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadingOfPromoFilm(response.data));
        console.log(response.data);
      });
  },
  loadingOfMovies: () => (dispatch, getState, api) => {
    return api.get(`https://4.react.pages.academy/wtw/films`)
    .then((response) => {
      dispatch(ActionCreator.loadingOfMovies(response.data));
    });
  },
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
    case ActionType.LOAD_PROMO_FILM:
      return Object.assign({}, state, {promoFilm: action.payload});
    default:
      return state;
  }
};

export {ActionCreator, ActionType, Operation, reducer};
