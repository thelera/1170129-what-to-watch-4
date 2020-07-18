import {ActionCreator} from "../../reducer/data/data.js";
import {connect} from "react-redux";
import {Genre, GENRES_COUNT, AppRoute} from "../../utils/consts.js";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const GenresList = (props) => {
  const {activeItem: activeGenre = Genre.ALL, onActiveClick, onGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {Object.values(Genre).slice(0, GENRES_COUNT).map((genre) => (
        <li
          className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}
          key={genre}
        >
          <Link
            to={AppRoute.ROOT}
            className="catalog__genres-link"
            onClick={() => {
              onGenreClick(genre);
              onActiveClick(genre);
            }}
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  activeItem: PropTypes.oneOf(Object.values(Genre)),
  onActiveClick: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
