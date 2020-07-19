import {Error, Genre} from "./consts.js";
import moment from "moment";

const createRange = (from, to) => {
  let result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
};

const fromMinToHours = (minutes) => {
  return moment.utc(moment.duration(minutes,`minutes`).as(`milliseconds`)).format(`h[h] mm[m]`);
};

const fromSecToHours = (seconds) => {
  return moment.utc(moment.duration(seconds,`seconds`).as(`milliseconds`)).format(`HH:mm:ss`);
};

const getError = ({response}) => {
  let error;

  switch (response.status) {
    case Error.BAD_REQUEST.code:
      error = Error.BAD_REQUEST.errorMessage;
      break;
    case Error.UNAUTHORIZED.code:
      error = Error.UNAUTHORIZED.errorMessage;
      break;
    case Error.NOT_FOUND.code:
      error = Error.NOT_FOUND.errorMessage;
      break;
    default:
      error = `${Error.DEFAULT.errorMessage} ${Error}`;
  }

  return error;
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

const getUniqueArrayElements = (array) => {
  let result = [];

  array.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });

  return result;
};

const parseDate = (date) => {
  return moment(date).format(`MMMM Do YYYY`);
};

const removeFromArray = (array, id) => {
  const elementToRemove = array.find((it) => it.id === id);

  const index = array.indexOf(elementToRemove);

  if (index > -1) {
    array.slice(0).splice(index, 1);
  }

  return array;
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

export {createRange, fromMinToHours, fromSecToHours, getError, getFilmsByFilter, getRatingLevel, getUniqueArrayElements, parseDate, removeFromArray, updateFilmsByNewFilm};
