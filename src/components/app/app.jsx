import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import {getFilmById, getFilmsListByGenre, getPromoFilm, getVideoPlayerInfo} from "../../reducer/data/selectors.js";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import React from "react";
import SignIn from "../sign-in/sign-in.jsx";
import VideoPlayer from "../video-player/video-player.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import withVideo from "../../hocs/with-video/with-video.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";

const FilmDetailsWrapped = withActiveItem(FilmDetails);
const VideoPlayerWrapped = withVideo(VideoPlayer);

const App = (props) => {
  const {isPlayerOpened, film, login, promoFilm} = props;

  const renderApp = () => {
    if (isPlayerOpened) {
      if (film) {
        return (
          <VideoPlayerWrapped
            isMuted={false}
            isControled={true}
            isPlaying={true}
            preview={film.preview}
            videoLink={film.videoLink}
          />
        );
      } else {
        return (
          <VideoPlayerWrapped
            isMuted={false}
            isControled={true}
            isPlaying={true}
            preview={promoFilm.preview}
            videoLink={promoFilm.videoLink}
          />
        );
      }
    }

    if (film) {
      return (
        <FilmDetailsWrapped
          film={film}
          key={film.id}
        />
      );
    } else {
      return (
        <Main />
      );
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          {renderApp()}
        </Route>
        <Route exact path="/:id?" component={FilmDetails} />
        <Route exact path="/player/:id?" render={() => (
          <VideoPlayerWrapped
            isMuted={false}
            isControled={true}
            isPlaying={true}
            preview={promoFilm.preview}
            videoLink={promoFilm.videoLink}
          />
        )}>
        </Route>
        <Route exact path="/login">
          <SignIn
            onSubmit={login}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
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
  isPlayerOpened: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  promoFilm: PropTypes.shape({
    genre: PropTypes.string,
    image: PropTypes.string,
    preview: PropTypes.string,
    previewVideoLink: PropTypes.string,
    title: PropTypes.string,
    videoLink: PropTypes.string,
    year: PropTypes.number,
  }),
};

const mapStateToProps = (state) => ({
  film: getFilmById(state),
  filmsList: getFilmsListByGenre(state),
  promoFilm: getPromoFilm(state),
  isPlayerOpened: getVideoPlayerInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
