import {Genre} from "./consts.js";

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

export {getFilmsByFilter, getUniqueArrayElements};
