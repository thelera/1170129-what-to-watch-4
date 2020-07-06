import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";
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
    const {film, onClick, onHover} = this.props;
    const {image, preview, title} = film;

    return (
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image"
          onClick={() => {
            onClick(film.id);
          }}
          onMouseEnter={() => {
            this.timerId = setTimeout(() => this.setState({isPlaying: true}), Video.INTERVAL_IN_SEC);

            onHover(film.id);
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
            onClick(film.id);
          }}>
          <a className="small-movie-card__link">{title}</a>
        </h3>
      </article>
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }
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
  onHover: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onClick(id) {
    dispatch(ActionCreator.filmIdAction(id));
  },
});

export {FilmCard};
export default connect(mapStateToProps, mapDispatchToProps)(FilmCard);
