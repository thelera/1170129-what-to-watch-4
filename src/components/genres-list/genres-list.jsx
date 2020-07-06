import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";
import {Genre, GENRES_COUNT} from "../../utils/consts.js";
import PropTypes from "prop-types";
import React from "react";
import {SHOWING_FILMS_COUNT_ON_START} from "../../utils/consts.js";

const GenresList = (props) => {
  const {genre: activeGenre, onGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {Object.values(Genre).slice(0, GENRES_COUNT).map((genre) => (
        <li
          className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}
          onClick={() => onGenreClick(genre, SHOWING_FILMS_COUNT_ON_START)}
          key={genre}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genre: PropTypes.oneOf(Object.values(Genre)),
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre, count) {
    dispatch(ActionCreator.genreAction(genre));
    dispatch(ActionCreator.filmsCountAction(count));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);