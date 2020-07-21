import {Genre, MAX_TEXT_LENGTH, MIN_TEXT_LENGTH, SIMILAR_FILMS_COUNT, ValidationMessage} from "./consts.js";
import moment from "moment";

const createRange = (from, to) => {
  let result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
};

const fromMinToHours = (minutes) => {
  return moment.utc(moment.duration(minutes, `minutes`).as(`milliseconds`)).format(`h[h] mm[m]`);
};

const fromSecToHours = (seconds) => {
  return moment.utc(moment.duration(seconds, `seconds`).as(`milliseconds`)).format(`HH:mm:ss`);
};

const getElementById = (array, id) => {
  return array.find((it) => it.id === id);
};

const getFilmsByFilter = (array, filterType) => {
  return filterType === Genre.ALL ? array : array.filter((item) => item.genre === filterType);
};

const getRatingLevel = (score) => {
  let result = ``;

  switch (true) {
    case score >= 10:
      result = `Awesome`;
      break;
    case score > 8:
      result = `Very good`;
      break;
    case score > 5:
      result = `Good`;
      break;
    case score > 3:
      result = `Normal`;
      break;
    default:
      result = `Bad`;
  }

  return result;
};

const getSimilarFilmsByGenre = (films, id) => {
  const film = getElementById(films, id);
  const filmsByGenre = getFilmsByFilter(films, film.genre);
  const similarFilmsWithoutFilm = removeFromArray(filmsByGenre, id);

  return similarFilmsWithoutFilm.slice(0, SIMILAR_FILMS_COUNT);
};

const getUniqueArrayElements = (array) => {
  let result = [];

  array.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });

  return result;
};

const getValidationMessage = (score, text) => {
  let message = ``;

  if (text.length <= MIN_TEXT_LENGTH || length >= MAX_TEXT_LENGTH) {
    message = `${ValidationMessage.SCORE} ${MIN_TEXT_LENGTH} - ${MAX_TEXT_LENGTH} symbols.`;
  } else if (score === 0) {
    message = ValidationMessage.TEXT;
  }

  return message;
};

const parseDate = (date) => {
  return moment(date).format(`MMMM Do YYYY`);
};

const removeFromArray = (array, id) => {
  return array.filter((it) => it.id !== id);
};

const updateFilmsByNewFilm = (films, film) => {
  const id = film.id;
  const index = films.findIndex((it) => it.id === id);

  if (index === -1) {
    return false;
  }

  films = [].concat(films.slice(0, index), film, films.slice(index + 1));

  return films;
};

export {createRange, fromMinToHours, fromSecToHours, getElementById, getFilmsByFilter, getRatingLevel, getSimilarFilmsByGenre, getUniqueArrayElements, getValidationMessage, parseDate, removeFromArray, updateFilmsByNewFilm};
