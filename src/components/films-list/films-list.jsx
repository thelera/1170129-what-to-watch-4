import FilmCard from "../film-card/film-card.jsx";
import PropTypes from "prop-types";
import React from "react";
import withTimerOnHover from "../../hocs/with-timer-on-hover/with-timer-on-hover.js";

const FilmCardWrapped = withTimerOnHover(FilmCard);

const FilmsList = (props) => {
  const {films} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) =>
        <FilmCardWrapped
          film={film}
          key={film.id}
        />)}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        backgroundColor: PropTypes.string.isRequired,
        backgroundImage: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isFavourite: PropTypes.bool.isRequired,
        image: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        previewVideoLink: PropTypes.string.isRequired,
        ratingCount: PropTypes.number.isRequired,
        ratingScore: PropTypes.number.isRequired,
        runTime: PropTypes.number.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
        videoLink: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
      })).isRequired,
};

export default FilmsList;
