import {ActionCreator as ErrorActionCreator} from "../errors/errors.js";
import {ErrorMessage, Genre, SHOWING_FILMS_COUNT_ON_START} from "../../utils/consts.js";
import {createFilm, createFilms} from "../../adapters/films.js";
import {updateFilmsByNewFilm} from "../../utils/common.js";

const initialState = {
  allFilms: null,
  genre: Genre.ALL,
  favouriteFilms: [],
  promoFilm: {},
  showedFilmsCount: SHOWING_FILMS_COUNT_ON_START,
};

const ActionType = {
  ADD_FILM_TO_FAVOURITES: `ADD_FILM_TO_FAVOURITES`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  INCREMENT_SHOWED_FILMS_COUNT: `INCREMENT_SHOWED_FILMS_COUNT`,
  FAVOURITE_FILMS: `FAVOURITE_FILMS`,
  SET_FILMS: `SET_FILMS`,
  SET_PROMO_FILM: `SET_PROMO_FILM`,
  UPDATE_PROMO_FILM: `UPDATE_PROMO_FILM`,
  UPDATE_FILMS: `UPDATE_FILMS`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  incrementFilmsCount: (count) => ({
    type: ActionType.INCREMENT_SHOWED_FILMS_COUNT,
    payload: count,
  }),
  favouriteFilms: (films) => ({
    type: ActionType.FAVOURITE_FILMS,
    payload: films,
  }),
  setFilms: (films) => ({
    type: ActionType.SET_FILMS,
    payload: films,
  }),
  setPromoFilm: (film) => ({
    type: ActionType.SET_PROMO_FILM,
    payload: film,
  }),
  updatePromoFilm: (film) => ({
    type: ActionType.UPDATE_PROMO_FILM,
    payload: film,
  }),
  updateFilms: (film) => ({
    type: ActionType.UPDATE_FILMS,
    payload: film,
  }),
};

const Operation = {
  addFilmToFavourites: (id, isFavourite) => (dispatch, getState, api) => {
    const status = isFavourite ? 0 : 1;
    return api.post(`/favorite/${id}/${status}`)
    .then((response) => {
      dispatch(ActionCreator.updateFilms(createFilm(response.data)));
      dispatch(ActionCreator.updatePromoFilm(createFilm(response.data)));
    })
    .catch(() => {
      dispatch(ErrorActionCreator.loadError(ErrorMessage.DEFAULT));
    });
  },
  loadFavouriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
    .then((response) => {
      dispatch(ActionCreator.favouriteFilms(createFilms(response.data)));
    })
    .catch(() => {
      dispatch(ErrorActionCreator.loadError(ErrorMessage.LOADING));
    });
  },
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.setFilms(createFilms(response.data)));
    })
    .catch((err) => {
      dispatch(ErrorActionCreator.loadError(ErrorMessage.LOADING));

      return Promise.reject(err);
    });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`films/promo`)
      .then((response) => {
        dispatch(ActionCreator.setPromoFilm(createFilm(response.data)));
      })
      .catch((err) => {
        dispatch(ErrorActionCreator.loadError(ErrorMessage.LOADING));

        return Promise.reject(err);
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
    case ActionType.INCREMENT_SHOWED_FILMS_COUNT:
      return Object.assign({}, state, {showedFilmsCount: state.showedFilmsCount + action.payload});
    case ActionType.FAVOURITE_FILMS:
      return Object.assign({}, state, {favouriteFilms: action.payload});
    case ActionType.SET_FILMS:
      return Object.assign({}, state, {allFilms: action.payload});
    case ActionType.SET_PROMO_FILM:
      return Object.assign({}, state, {promoFilm: action.payload});
    case ActionType.UPDATE_FILMS:
      return Object.assign({}, state, {allFilms: updateFilmsByNewFilm(state.allFilms, action.payload)});
    case ActionType.UPDATE_PROMO_FILM:
      return Object.assign({}, state, {promoFilm: action.payload});
    default:
      return state;
  }
};

export {ActionCreator, ActionType, Operation, reducer};
