import {AppRoute} from "../../utils/consts.js";
import {AuthorizationStatus} from "../../utils/consts.js";
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import {getAuthorizationStatus, getAvatarURL} from "../../reducer/user/selectors.js";
import {getAllFilms, getFavouriteFilms} from "../../reducer/data/selectors.js";
import {Link} from "react-router-dom";
import Main from "../main/main.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import PropTypes from "prop-types";
import React, {Fragment} from "react";
import SignIn from "../sign-in/sign-in.jsx";
import VideoPlayer from "../video-player/video-player.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import withVideo from "../../hocs/with-video/with-video.js";
import withForm from "../../hocs/with-form/with-form.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import MyList from "../my-list/my-list.jsx";

const FilmDetailsWrapped = withActiveItem(FilmDetails);
const VideoPlayerWrapped = withVideo(VideoPlayer);
const SignInWrapped = withForm(SignIn);

const App = (props) => {
  const {allFilms, authorizationStatus, avatarURL, favouriteFilms, login} = props;
  console.log(`favourite films`);
  console.log(favouriteFilms);

  if (allFilms.length === 0) {
    return (
      <div></div>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main
            authorizationStatus={authorizationStatus}
            avatarImage={avatarURL}
          />
        </Route>
        <Route exact path={`${AppRoute.FILMS}:id`} render={(props) => {
          const id = Number(props.match.params.id);
          const film = allFilms.find((film) => film.id === id);

          return (
            <FilmDetailsWrapped
              authorizationStatus={authorizationStatus}
              avatarImage={avatarURL}
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
            ? <SignInWrapped
                onSubmit={login}
              />
            : <Redirect to={AppRoute.ROOT} />);
        }}/>
        <PrivateRoute exact path={AppRoute.MY_LIST} render={() => {
            return (
              <MyList
                avatarImage={avatarURL}
                filmsList={favouriteFilms}
              />
            );
          }}/>
        <Route render={() => (
          <Fragment>
            <h1>
              404.
              <br />
              <small>Page not found</small>
            </h1>
            <Link to={AppRoute.ROOT}>Go to main page</Link>
          </Fragment>
        )}/>
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
  avatarURL: getAvatarURL(state),
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
