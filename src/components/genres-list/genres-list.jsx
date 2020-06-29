import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";
import {Genre} from "../../utils/consts.js";
import PropTypes from "prop-types";
import React from "react";

const GenresList = (props) => {
  const {allFilms, genre: activeGenre, onGenreClick} = props;

  return (
    <ul className="catalog__genres-list" onClick={(evt) => {
      const activeGenre = evt.target.textContent;

      onGenreClick(allFilms, activeGenre);
    }}>
      {Object.values(Genre).map((genre, index) => (
        <li key={genre + index} className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
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
