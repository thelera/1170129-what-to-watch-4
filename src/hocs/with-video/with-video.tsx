import * as React from "react";
import {connect} from "react-redux";
import {Film} from "../../types";
import {getAllFilms} from "../../reducer/data/selectors";
import {getElementById} from "../../utils/common";

interface Props {
  film: Film;
  height: number;
  isMuted: boolean;
  isControled: boolean;
  isPlaying: boolean;
  width: number;
}

interface State {
  progress: number;
  isFullScreen: boolean;
  isLoading: boolean;
  isPlaying: boolean;
}

interface MyHTMLVideoElement extends HTMLVideoElement {
  exitFullScreen: () => Promise<void>;
  requestFullscreen: () => Promise<void>;
}

const withVideo = (Component) => {
  class WithVideo extends React.PureComponent<Props, State> {
    private videoRef: React.RefObject<MyHTMLVideoElement>;

    constructor(props) {
      super(props);

      this.videoRef = React.createRef();

      this.state = {
        progress: 0,
        isFullScreen: false,
        isLoading: true,
        isPlaying: props.isPlaying,
      };

      this._handleFullScreenClick = this._handleFullScreenClick.bind(this);
      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
    }

    componentDidMount() {
      const {isMuted = true, film, height, width} = this.props;
      const {preview, videoLink} = film;

      const video = this.videoRef.current;

      video.muted = isMuted;
      video.height = height;
      video.poster = preview;
      video.src = videoLink;
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
      const video = this.videoRef.current;

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      video.src = ``;
    }

    _handleFullScreenClick() {
      const video = this.videoRef.current;

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

    render() {
      const video = this.videoRef.current;
      let duration;
      if (video) {
        duration = video.duration;
      } else {
        duration = 0;
      }
      const {isLoading, isPlaying} = this.state;
      const {isControled = false} = this.props;

      return (
        <Component
          {...this.props}
          duration={duration}
          isLoading={isLoading}
          isPlaying={isPlaying}
          progress={this.state.progress}
          onPlayButtonClick={this._handlePlayButtonClick}
          onFullScreenButtonClick={this._handleFullScreenClick}
        >
          <video
            className={isControled ? `player__video` : ``}
            ref={this.videoRef}
          >
            Sorry, your browser doesn&apos;t support embedded videos.
          </video>
        </Component>
      );
    }
  }

  const mapStateToProps = (state, ownProps) => ({
    film: getElementById(getAllFilms(state), ownProps.id),
  });

  return connect(mapStateToProps)(WithVideo);
};

export default withVideo;
