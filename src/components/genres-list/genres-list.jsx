import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";
import {Genre, GENRES_COUNT} from "../../utils/consts.js";
import PropTypes from "prop-types";
import React from "react";

const GenresList = (props) => {
  const {onActiveClick, onGenreClick} = props;
  let {activeItem: activeGenre} = props;

  if(!activeGenre) {
    activeGenre = Genre.ALL;
  }

  return (
    <ul className="catalog__genres-list">
      {Object.values(Genre).slice(0, GENRES_COUNT).map((genre) => (
        <li
          className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}
          key={genre}
        >
          <a href="#"
            className="catalog__genres-link"
            onClick={() => {
              onGenreClick(genre);
              onActiveClick(genre);
            }}
          >
            {genre}
          </a>
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
  onGenreClick(genre) {
    dispatch(ActionCreator.genreAction(genre));
    dispatch(ActionCreator.resetOfFilmsCountAction());
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
