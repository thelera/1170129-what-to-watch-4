import {Genre} from "./consts.js";
import { element } from "prop-types";

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

const removeFromArray = (array, id) => {
  const elementToRemove = array.find((it) => it.id === id);

  var index = array.indexOf(elementToRemove);

  if (index > -1) {
    array.splice(index, 1);
  }

  return array;
};

export {getFilmsByFilter, getUniqueArrayElements, removeFromArray};
