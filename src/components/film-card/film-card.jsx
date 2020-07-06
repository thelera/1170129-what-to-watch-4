import PropTypes from "prop-types";
import React from "react";
import {Video} from "../../utils/consts.js";
import VideoPlayer from "../video-player/video-player.jsx";

const FilmCard = (props) => {
  const {film, isPlaying, onMouseEnter, onMouseLeave, onClick} = props;
  const {image, preview, title} = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <VideoPlayer
          source={preview}
          poster={image}
          isMuted={Video.IS_MUTED}
          isPlaying={isPlaying}
          width={Video.WIDTH}
          height={Video.HEIGHT}
        />
      </div>
      <h3 className="small-movie-card__title"
        onClick={onClick}>
        <a className="small-movie-card__link">{title}</a>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    backgroundImage: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    director: PropTypes.arrayOf(PropTypes.string).isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    ratingScore: PropTypes.number.isRequired,
    runTime: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default FilmCard;