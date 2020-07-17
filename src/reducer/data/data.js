import {Genre, SHOWING_FILMS_COUNT_ON_START} from "../../utils/consts.js";
import {createFilm, createFilms} from "../../adapters/films.js";

const updateFilmsByNewFilm = (films, film) => {
  const id = film.id;
  const index = films.findIndex((it) => it.id === id);

  if (index === -1) {
    return false;
  }

  films = [].concat(films.slice(0, index), film, films.slice(index + 1));

  return films;
}

const initialState = {
  allFilms: [],
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
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
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
  loadMovies: (films) => ({
    type: ActionType.LOAD_MOVIES,
    payload: films,
  }),
  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
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
    .catch((err) => {
      throw err;
    });
  },
  loadFavouriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
    .then((response) => {
      dispatch(ActionCreator.favouriteFilms(createFilms(response.data)));
    })
    .catch((err) => {
      throw err;
    });
  },
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.loadMovies(createFilms(response.data)));
    })
    .catch((err) => {
      throw err;
    });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoFilm(createFilm(response.data)));
      })
      .catch((err) => {
        throw err;
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
    case ActionType.LOAD_MOVIES:
      return Object.assign({}, state, {allFilms: action.payload});
    case ActionType.LOAD_PROMO_FILM:
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
