import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {Video} from "../../utils/consts.js";
import VideoPlayer from "../video-player/video-player.jsx";

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {index, film, onClick, onHover} = this.props;
    const {image, preview, title} = film;

    return (
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image"
          onClick={() => {
            onClick(index);
          }}
          onMouseEnter={() => {
            this.timerId = setTimeout(() => this.setState({isPlaying: true}), Video.INTERVAL_IN_SEC);

            onHover(index);
          }}
          onMouseLeave={() => {
            clearTimeout(this.timerId);

            this.setState({
              isPlaying: false,
            });
          }}
        >
          <VideoPlayer
            source={preview}
            poster={image}
            isMuted={Video.IS_MUTED}
            isPlaying={this.state.isPlaying}
            width={Video.WIDTH}
            height={Video.HEIGHT}
          />
        </div>
        <h3 className="small-movie-card__title"
          onClick={() => {
            onClick(index);
          }}>
          <a className="small-movie-card__link">{title}</a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  index: PropTypes.number.isRequired,
  film: PropTypes.shape({
    image: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
};

export default FilmCard;
