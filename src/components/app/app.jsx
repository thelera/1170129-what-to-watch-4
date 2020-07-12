import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import VideoPlayer from "../video-player/video-player.jsx";
import PropTypes from "prop-types";
import React from "react";
import {getFilmById, getFilmsListByGenre, getPromoFilm, getVideoPlayerInfo} from "../../reducer/data/selectors.js";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import withVideo from "../../hocs/with-video/with-video.js";

const FilmDetailsWrapped = withActiveItem(FilmDetails);
const VideoPlayerWrapped = withVideo(VideoPlayer);

const App = (props) => {
  const {isPlayerOpened, film, promoFilm} = props;

  const renderApp = () => {
    if (isPlayerOpened) {
      if (film) {
        return (
          <VideoPlayerWrapped
            film={film}
            isMuted={false}
            isControled={true}
            isPlaying={true}
          />
        );
      } else {
        return (
          <VideoPlayerWrapped
            film={promoFilm}
            isMuted={false}
            isControled={true}
            isPlaying={true}
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
        <Route exact path="/">
          {renderApp()}
        </Route>
        <Route exact path="/dev-film-details">
          <FilmDetails
            film={film}
          />
        </Route>
        <Route exact path="/player">
          <VideoPlayerWrapped
            film={promoFilm}
            isMuted={false}
            isControled={true}
            isPlaying={true}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  film: PropTypes.shape({
    backgroundImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    ratingScore: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
  isPlayerOpened: PropTypes.bool.isRequired,
  promoFilm: PropTypes.shape({
    backgroundImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    ratingScore: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  film: getFilmById(state),
  filmsList: getFilmsListByGenre(state),
  promoFilm: getPromoFilm(state),
  isPlayerOpened: getVideoPlayerInfo(state),
});

export {App};
export default connect(mapStateToProps)(App);
