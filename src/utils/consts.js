const SIMILAR_FILMS_COUNT = 4;
const SHOWING_FILMS_COUNT = 8;
const SHOWING_FILMS_COUNT_ON_START = 8;

const API = {
  BASE_URL: `https://4.react.pages.academy/wtw`,
  TIMEOUT: 1000 * 5,
  CREDENTIALS: true,
};

const AppRoute = {
  FILMS: `/films/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  PLAYER: `/player/`,
  ROOT: `/`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
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

const GENRES_COUNT = 9;

export {API, AppRoute, AuthorizationStatus, FilmDetailsTab, Genre, GENRES_COUNT, SIMILAR_FILMS_COUNT, SHOWING_FILMS_COUNT, SHOWING_FILMS_COUNT_ON_START, Video};
