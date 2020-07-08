import {Genre} from "./consts.js";

const getFilmsByFilter = (array, filterType) => {
  return filterType === Genre.ALL ? array : array.filter((item) => item.genres.find((it) => it === filterType));
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

const getSimilarFilmsByGenres = (films, film) => {
  const filmsByGenre = [];
  const similarFilms = film.genres.map((genre) => [].concat(getFilmsByFilter(films, genre)));
  similarFilms.forEach((movie) => movie.forEach((it) => filmsByGenre.push(it)));
  const similarFilmsByGenre = filmsByGenre.filter((it) => it !== film);

  return getUniqueArrayElements(similarFilmsByGenre);
};

export {getFilmsByFilter, getSimilarFilmsByGenres, getUniqueArrayElements};
