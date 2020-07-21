const GENRES_COUNT = 9;
const MAX_RATING = 5;
const MIN_TEXT_LENGTH = 5;
const MAX_TEXT_LENGTH = 500;
const SHOWING_FILMS_COUNT = 8;
const SHOWING_FILMS_COUNT_ON_START = 8;
const SIMILAR_FILMS_COUNT = 4;

const Api = {
  BASE_URL: `https://4.react.pages.academy/wtw`,
  TIMEOUT: 1000 * 5,
  CREDENTIALS: true,
};

const AppRoute = {
  ADD_REVIEW: `/review`,
  FILMS: `/films`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  PLAYER: `/player`,
  MAIN: `/`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const ErrorMessage = {
  AUTHORIZATION: `Authorization error. Please wait a little or reload the page.`,
  CONNECTION: `No internet connection.`,
  DEFAULT: `Error was detected. Please wait a little or reload the page.`,
  LOADING: `Error in loading data. Please reload the page.`,
  SENDING: `Error. Please sent your message again or reload the page.`,
};

const ErrorStatus = {
  BAD_REQUEST: {code: 400, errorMessage: `Неверный запрос`},
  UNAUTHORIZED: {code: 401, errorMessage: `Пользователь не авторизован`},
  NOT_FOUND: {code: 404, errorMessage: `Ничего не найдено`},
  DEFAULT: {errorMessage: `Произошла ошибка. Попробуйте отправить сообщение еще раз или перезагрузить страницу.`},
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

const ValidationMessage = {
  SCORE: `Review should be between`,
  TEXT: `Please choose at least one star.`,
};

const Video = {
  WIDTH: 280,
  HEIGHT: 175,
  INTERVAL_IN_SEC: 1000,
  IS_MUTED: true,
};

export {Api, AppRoute, AuthorizationStatus, ErrorMessage, ErrorStatus, FilmDetailsTab, Genre, GENRES_COUNT, MAX_RATING, MAX_TEXT_LENGTH, MIN_TEXT_LENGTH, SIMILAR_FILMS_COUNT, SHOWING_FILMS_COUNT, SHOWING_FILMS_COUNT_ON_START, ValidationMessage, Video};
