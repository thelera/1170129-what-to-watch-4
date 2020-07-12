import {Genre} from "./consts.js";

const fromMinToHours = (min) => {
  const hours = Math.floor(min / 60);
  const minutes = min % 60;

  return `${hours}h ${minutes}m`;
};

const fromSecToHours = (sec) => {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const secunds = Math.floor((sec % 3600) % 60);

  return `${hours}:${minutes}:${secunds}`;
};

const getFilmsByFilter = (array, filterType) => {
  return filterType === Genre.ALL ? array : array.filter((item) => item.genre === filterType);
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

const getRatingLevel = (score) => {
  switch (score) {
    case score >= 10:
      return `Awesome`;
    case score >= 8:
      return `Very good`;
    case score >= 5:
      return `Good`;
    case score >= 3:
      return `Normal`;
    default:
      return `Bad`;
  }
};

const removeFromArray = (array, id) => {
  const elementToRemove = array.find((it) => it.id === id);

  const index = array.indexOf(elementToRemove);

  if (index > -1) {
    array.splice(index, 1);
  }

  return array;
};

export {fromMinToHours, fromSecToHours, getFilmsByFilter, getRatingLevel, getUniqueArrayElements, removeFromArray};
