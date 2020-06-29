import {Genre} from "./consts.js";

const getFilmsByFilter = (array, filterType) => {
  return filterType === Genre.ALL ? array : array.filter((item) => item.genres.find((it) => it === filterType));
};

export {getFilmsByFilter};
