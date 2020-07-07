import FilmCard from "../film-card/film-card.jsx";
import PropTypes from "prop-types";
import React from "react";
import withFilmCard from "../../hocs/with-timer-on-hover/with-timer-on-hover.js";

const FilmCardWrapped = withFilmCard(FilmCard);

const FilmsList = (props) => {
  const { films } = props;
  return (
    <div className="catalog__movies-list">
      {films.map((film) =>
        <FilmCardWrapped
          film={film}
          key={film.id}
        />)}
    </div>
  );
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsList;
