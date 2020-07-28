import * as React from "react";
import {fromMinToHours} from "../../utils/common";

const FilmDetails = (props) => {
  const {film} = props;

  const {director, genre, runTime, starring, year} = film;

  const time = fromMinToHours(runTime);

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.map((star, index) => <React.Fragment key={index}>{star}<br /></React.Fragment>)}
          </span>
        </p>
      </div>
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{time}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{year}</span>
        </p>
      </div>
    </div>
  );
};

FilmDetails.propTypes = {
  film: PropTypes.shape({
    director: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired,
    starring: PropTypes.array.isRequired,
    year: PropTypes.number.isRequired,
  })
};

export default FilmDetails;
