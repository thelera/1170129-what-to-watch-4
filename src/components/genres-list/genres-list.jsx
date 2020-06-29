import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";
import {Genre, GENRES_COUNT} from "../../utils/consts.js";
import PropTypes from "prop-types";
import React from "react";

const GenresList = (props) => {
  const {allFilms, genre: activeGenre, onGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {Object.values(Genre).slice(0, GENRES_COUNT).map((genre) => (
        <li className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`} onClick={() => onGenreClick(allFilms, genre)} key={genre}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  allFilms: PropTypes.array.isRequired,
  genre: PropTypes.oneOf(Object.values(Genre)),
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allFilms: state.allFilms,
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(films, genre) {
    dispatch(ActionCreator.changeGenreAction(genre));
    dispatch(ActionCreator.getFilmListByGenreAction(films, genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
