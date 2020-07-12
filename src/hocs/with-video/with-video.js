import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        progress: 0,
        isFullScreen: false,
        isLoading: true,
        isPlaying: props.isPlaying,
      };

      this._handleFullScreenClick = this._handleFullScreenClick.bind(this);
      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
    }

    _handleFullScreenClick() {
      const video = this._videoRef.current;

      if (this.state.isFullScreen) {
        this.setState({isFullScreen: false});

        video.exitFullScreen();
      } else {
        this.setState({isFullScreen: true});

        video.requestFullscreen();
      }
    }

    _handlePlayButtonClick() {
      this.setState((prevState) => ({isPlaying: !prevState.isPlaying}));
    }

    componentDidMount() {
      const {film, isMuted = true, width, height} = this.props;
      const {preview, previewVideoLink} = film;

      const video = this._videoRef.current;

      video.muted = isMuted;
      video.height = height;
      video.poster = preview;
      video.src = previewVideoLink;
      video.width = width;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.onpause = () => this.setState({
        isPlaying: false,
      });

      video.ontimeupdate = () => this.setState({
        progress: Math.floor(video.currentTime),
      });
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      video.src = ``;
    }

    render() {
      const {isLoading, isPlaying} = this.state;
      const {isControled = false} = this.props;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          onPlayButtonClick={this._handlePlayButtonClick}
          onFullScreenButtonClick={this._handleFullScreenClick}
          progress={this.state.progress}
        >
          <video
            className={isControled ? `player__video` : ``}
            ref={this._videoRef}
          >
            Sorry, your browser doesn&apos;t support embedded videos.
          </video>
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    film: PropTypes.shape({
      preview: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
    }).isRequired,
    height: PropTypes.number,
    isControled: PropTypes.bool,
    isMuted: PropTypes.bool,
    isPlaying: PropTypes.bool.isRequired,
    width: PropTypes.number,
  };

  return WithVideo;
};

export default withVideo;
