import {createSelector} from "reselect";
import {getFilmsByFilter} from "../../utils/common.js";
import NameSpace from "../name-space.js";

const getAllFilms = (state) => state[NameSpace.DATA].allFilms;

const getFavouriteFilms = (state) => state[NameSpace.DATA].favouriteFilms;

const getGenre = (state) => state[NameSpace.DATA].genre;

const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;

const getShowedFilmsCount = (state) => state[NameSpace.DATA].showedFilmsCount;

const getVideoPlayerInfo = (state) => state[NameSpace.DATA].isPlayerOpened;

const getFilmsListByGenre = createSelector(
    getAllFilms,
    getGenre,
    (allFilms, genre) => getFilmsByFilter(allFilms, genre)
);

export {getAllFilms, getFavouriteFilms, getFilmsListByGenre, getGenre, getPromoFilm, getShowedFilmsCount, getVideoPlayerInfo};
