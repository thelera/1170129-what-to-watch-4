import {AppRoute} from "../../utils/consts.js";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import {Video} from "../../utils/consts.js";
import VideoPlayer from "../video-player/video-player.jsx";
import withVideo from "../../hocs/with-video/with-video.js";

const VideoPlayerWrapped = withVideo(VideoPlayer);

const FilmCard = (props) => {
  const {film, isPlaying, onMouseEnter, onMouseLeave} = props;
  const {id, title} = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <Link
        to={`${AppRoute.FILMS}/${id}`}
        className="small-movie-card__image"
        onMouseEnter={() => {
          onMouseEnter();
        }}
        onMouseLeave={onMouseLeave}
      >
        <VideoPlayerWrapped
          id={id}
          isPlaying={isPlaying}
          height={Video.HEIGHT}
          key={id}
          width={Video.WIDTH}
        />
      </Link>
      <h3 className="small-movie-card__title">
        <Link
          to={`${AppRoute.FILMS}/${id}`}
          className="small-movie-card__link">
          {title}
        </Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
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
  }),
  isPlaying: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default FilmCard;
