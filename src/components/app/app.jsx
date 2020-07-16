import {AppRoute} from "../../utils/consts.js";
import {AuthorizationStatus} from "../../utils/consts.js";
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {getAllFilms, getFilmsListByGenre, getFavouriteFilms} from "../../reducer/data/selectors.js";
import {Link} from "react-router-dom";
import Main from "../main/main.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import PropTypes from "prop-types";
import React, {Fragment} from "react";
import SignIn from "../sign-in/sign-in.jsx";
import VideoPlayer from "../video-player/video-player.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import withVideo from "../../hocs/with-video/with-video.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import MyList from "../my-list/my-list.jsx";

const FilmDetailsWrapped = withActiveItem(FilmDetails);
const VideoPlayerWrapped = withVideo(VideoPlayer);

const App = (props) => {
  const {allFilms, favouriteFilms, authorizationStatus, login} = props;
  console.log(`favouriteFilms: ${favouriteFilms}`);

  if (allFilms.length === 0) {
    return (
      <div></div>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={`${AppRoute.FILMS}:id`} render={(props) => {
          console.log(3);

          const id = Number(props.match.params.id);
          const film = allFilms.find((film) => film.id === id);

          return (
            <FilmDetailsWrapped
              film={film}
            />
          );
        }}/>
        <Route exact path={`${AppRoute.PLAYER}:id`} render={(props) => {
          const id = Number(props.match.params.id);
          const film = allFilms.find((film) => film.id === id);
          const {preview, videoLink} = film;

          return (
            <VideoPlayerWrapped
              history={props.history}
              isMuted={false}
              isControled={true}
              isPlaying={true}
              preview={preview}
              videoLink={videoLink}
            />
          );
        }}/>
        <Route exact path={AppRoute.LOGIN} render={(props) => {
          return (
            authorizationStatus === AuthorizationStatus.NO_AUTH
            ? <SignIn
                onSubmit={login}
              />
            : <Redirect to={AppRoute.ROOT} />);
        }}/>
        {/* <Route exact path={AppRoute.MY_LIST} render={(props) => {
          return(
            <MyList
              filmsList={favouriteFilms}
              onClick={(film) => {
                if (!film.isFavourite) {
                  store.dispatch(DataOperation.addFilmToFavourites(film));
                }
              }}
            />
          );
        }}/> */}
        <PrivateRoute
            exact
            path={AppRoute.MY_LIST}
            render={() => {
              return (
                <MyList
                  filmsList={favouriteFilms}
                  onClick={(film) => {
                  if (!film.isFavourite) {
                    store.dispatch(DataOperation.addFilmToFavourites(film));
                  }
                }}
                />
              );
            }}
          />
        <Route
          render={() => (
            <Fragment>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to={AppRoute.ROOT}>Go to main page</Link>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  allFilms: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allFilms: getAllFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
  favouriteFilms: getFavouriteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
