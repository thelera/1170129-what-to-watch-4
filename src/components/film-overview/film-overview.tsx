import * as React from "react";
import {getRatingLevel} from "../../utils/common";
import {Film} from "../../types";

interface Props {
  film: Film,
}

const FilmOverview: React.FunctionComponent<Props> = (props: Props) => {
  const {film} = props;

  const {description, director, ratingCount, ratingScore, starring} = film;

  return (
    <div>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingLevel(ratingScore)}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.map((star) => star).join(`, `)} and other</strong></p>
      </div>
    </div>
  );
};

export default FilmOverview;
