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

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    const {allFilms, index, onClick, onHover} = this.props;
    const {image, preview, title} = allFilms[index];

    return (
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image"
          onClick={() => {
            onClick(allFilms, index);
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
            onClick(allFilms, index);
          }}>
          <a className="small-movie-card__link">{title}</a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  allFilms: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allFilms: state.allFilms,
});

const mapDispatchToProps = (dispatch) => ({
  onClick(movies, index) {
    dispatch(ActionCreator.getFilmDetailsAction(index));
    dispatch(ActionCreator.getFilmsListByGenresAction(movies, movies[index]));
  },
});

export {FilmCard};
export default connect(mapStateToProps, mapDispatchToProps)(FilmCard);
