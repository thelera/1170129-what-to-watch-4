const GENRES_COUNT = 9;
const MAX_RATING = 5;
const MIN_TEXT_LENGTH = 5;
const MAX_TEXT_LENGTH = 500;
const SIMILAR_FILMS_COUNT = 4;
const SHOWING_FILMS_COUNT = 8;
const SHOWING_FILMS_COUNT_ON_START = 8;

const API = {
  BASE_URL: `https://4.react.pages.academy/wtw`,
  TIMEOUT: 1000 * 5,
  CREDENTIALS: true,
};

const AppRoute = {
  ADD_REVIEW: `/review`,
  FILMS: `/films/`,
  LOGIN: `/login`,
  MAIN: `/main/`,
  MY_LIST: `/mylist`,
  PLAYER: `/player/`,
  ROOT: `/`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const Error = {
  BAD_REQUEST: {code: 400, errorMessage: `Неверный запрос`},
  UNAUTHORIZED: {code: 401, errorMessage: `Пользователь не авторизован`},
  NOT_FOUND: {code: 404, errorMessage: `Ничего не найдено`},
  DEFAULT: {errorMessage: `Статус ответа: `},
};

const Video = {
  WIDTH: 280,
  HEIGHT: 175,
  INTERVAL_IN_SEC: 1000,
  IS_MUTED: true,
};

const FilmDetailsTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const Genre = {
  ALL: `All genres`,
  ADVENTURE: `Adventure`,
  COMEDIES: `Comedy`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMAS: `Drama`,
  FANTASY: `Fantasy`,
  HORROR: `Horror`,
  KIDS_AND_FAMILY: `Kid's and Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci - Fi`,
  STORY: `Story`,
  THRILLERS: `Thriller`,
};

export {API, AppRoute, AuthorizationStatus, Error, FilmDetailsTab, Genre, GENRES_COUNT, MAX_RATING, MAX_TEXT_LENGTH, MIN_TEXT_LENGTH, SIMILAR_FILMS_COUNT, SHOWING_FILMS_COUNT, SHOWING_FILMS_COUNT_ON_START, Video};
