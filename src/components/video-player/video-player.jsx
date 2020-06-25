import PropTypes from "prop-types";
import React, {createRef, PureComponent} from "react";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {isPlaying: props.isPlaying};

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
    const { isPlaying, interval } = this.props;
    const video = this._videoRef.current;

    if (this.props.isPlaying !== prevProps.isPlaying) {
      if (isPlaying) {
        this.setState({ isPlaying: true });
        this.timerId = setTimeout(video.play.bind(video), interval);
      } else {
        video.pause();
        video.load();
        this.setState({ isPlaying: false });
        clearTimeout(this.timerId);
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
  interval: PropTypes.number.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default VideoPlayer;
