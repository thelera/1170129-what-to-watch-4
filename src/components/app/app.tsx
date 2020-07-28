import * as React from "react";
import AddReview from "../add-review/add-review";
import {AppRoute, AuthorizationStatus} from "../../utils/consts";
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import Error from "../error/error";
import FilmPage from "../film-page/film-page";
import {getAuthorizationStatus, getAvatarURL} from "../../reducer/user/selectors";
import {getAllFilms, getFavouriteFilms} from "../../reducer/data/selectors";
import {getError} from "../../reducer/errors/selectors";
import {Link} from "react-router-dom";
import Main from "../main/main";
import MyList from "../my-list/my-list";
import {Operation as UserOperation} from "../../reducer/user/user";
import PrivateRoute from "../private-route/private-route";
import SignIn from "../sign-in/sign-in";
import VideoPlayer from "../video-player/video-player";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import withForm from "../../hocs/with-form/with-form";
import withVideo from "../../hocs/with-video/with-video";
import withValidation from "../../hocs/with-validation/with-validation";

const AddReviewWrapped = withValidation(withForm(AddReview));
const FilmPageWrapped = withActiveItem(FilmPage);
const SignInWrapped = withValidation(SignIn);
const VideoPlayerWrapped = withVideo(VideoPlayer);

const App = (props) => {
  const {
    allFilms,
    authorizationStatus,
    avatarURL,
    errorText,
    favouriteFilms,
    login,
  } = props;

  if (!allFilms) {
    return (
      <div>
        {
          errorText &&
          <Error
            message={errorText}
          />
        }
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main/>
        </Route>
        <Route exact path={`${AppRoute.FILMS}/:id`} render={(routeProps) => {
          const id = Number(routeProps.match.params.id);

          return (
            <FilmPageWrapped
              id={id}
              key={id}
            />
          );
        }}/>
        <Route exact path={`${AppRoute.PLAYER}/:id`} render={(routeProps) => {
          const id = Number(routeProps.match.params.id);

          return (
            <VideoPlayerWrapped
              history={routeProps.history}
              isMuted={false}
              id={id}
              isControled={true}
              isPlaying={true}
            />
          );
        }}/>
        <Route exact path={AppRoute.LOGIN} render={() => {
          return (
            authorizationStatus === AuthorizationStatus.NO_AUTH
              ? <SignInWrapped
                onSubmit={login}
              />
              : <Redirect to={AppRoute.MAIN} />);
        }}/>
        <PrivateRoute exact path={`${AppRoute.FILMS}/:id${AppRoute.ADD_REVIEW}`} render={(routeProps) => {
          const id = Number(routeProps.match.params.id);
          const history = routeProps.history;

          return (
            <AddReviewWrapped
              avatarImage={avatarURL}
              history={history}
              id={id}
            />
          );
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
          <React.Fragment>
            <h1>
              404.
              <br />
              <small>Page not found</small>
            </h1>
            <Link to={AppRoute.MAIN}>Go to main page</Link>
          </React.Fragment>
        )}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  allFilms: PropTypes.oneOfType([PropTypes.array, PropTypes.arrayOf(
      PropTypes.shape({
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
      }))]),
  authorizationStatus: PropTypes.string.isRequired,
  avatarURL: PropTypes.string,
  errorText: PropTypes.string,
  favouriteFilms: PropTypes.arrayOf(PropTypes.shape({
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
  avatarURL: getAvatarURL(state),
  errorText: getError(state),
  favouriteFilms: getFavouriteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
