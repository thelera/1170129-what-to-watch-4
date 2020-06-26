import PropTypes from "prop-types";
import React, {createRef, PureComponent} from "react";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {isMuted, source, poster, width, height} = this.props;
    const video = this._videoRef.current;

    if (isMuted) {
      video.muted = true;
    }

    video.src = source;
    video.width = width;
    video.height = height;
    video.poster = poster;
  }

  componentDidUpdate(prevProps) {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (this.props.isPlaying !== prevProps.isPlaying) {
      if (isPlaying) {
        video.play();
      } else {
        video.pause();
        video.load();
      }
    }
  }

  render() {
    return (
      <video
        ref={this._videoRef}>
        Sorry, your browser doesn&apos;t support embedded videos.
      </video>
    );
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.src = ``;
  }
}

VideoPlayer.propTypes = {
  source: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default VideoPlayer;
