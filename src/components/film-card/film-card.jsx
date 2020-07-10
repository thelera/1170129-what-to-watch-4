import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import {Video} from "../../utils/consts.js";
import VideoPlayer from "../video-player/video-player.jsx";

const FilmCard = (props) => {
  const {film, isPlaying, onMouseEnter, onMouseLeave, onClick} = props;
  const {preview, previewVideoLink, title} = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image"
        onClick={() => {
          onClick(film.id);
        }}
        onMouseEnter={() => {
          onMouseEnter();
        }}
        onMouseLeave={onMouseLeave}
      >
        <VideoPlayer
          source={previewVideoLink}
          poster={preview}
          isMuted={Video.IS_MUTED}
          isPlaying={isPlaying}
          width={Video.WIDTH}
          height={Video.HEIGHT}
        />
      </div>
      <h3 className="small-movie-card__title"
        onClick={() => {
          onClick(film.id);
        }}>
        <a className="small-movie-card__link">{title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    backgroundImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    ratingScore: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
  isPlaying: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick(id) {
    dispatch(ActionCreator.filmIdAction(id));
  },
});

export {FilmCard};
export default connect(null, mapDispatchToProps)(FilmCard);
