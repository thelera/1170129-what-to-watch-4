const ERROR_COLOR = `red`;
const GENRES_COUNT = 9;
const GO_BACK_MESSAGE = `Go to main page.`;
const MAX_RATING = 5;
const MIN_TEXT_LENGTH = 50;
const MAX_TEXT_LENGTH = 400;
const SHOWING_FILMS_COUNT = 8;
const SHOWING_FILMS_COUNT_ON_START = 8;
const SIGN_IN_EMPTY_MESSAGE = `Please fill both email and password fields`;
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

const ErrorMessage = {
  AUTHORIZATION: `Authorization error. Please wait a little or reload the page.`,
  CONNECTION: `No internet connection.`,
  DEFAULT: `Error was detected. Please wait a little or reload the page.`,
  LOADING: `Error in loading data. Please reload the page.`,
  NOT_FOUND: `Page not found.`,
  SENDING: `Error. Please sent your message again or reload the page.`,
};

const ErrorStatusCode = {
  NOT_FOUND: 404,
  OK: 200,
  UNAUTHORIZED: 401,
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

export {Api, AppRoute, ERROR_COLOR, ErrorMessage, ErrorStatusCode, GENRES_COUNT, GO_BACK_MESSAGE, MAX_RATING, MAX_TEXT_LENGTH, MIN_TEXT_LENGTH, SIGN_IN_EMPTY_MESSAGE, SIMILAR_FILMS_COUNT, SHOWING_FILMS_COUNT, SHOWING_FILMS_COUNT_ON_START, ValidationMessage, Video};
