import * as React from "react";
import AddReview from "../add-review/add-review";
import {AppRoute, GO_BACK_MESSAGE, ErrorStatusCode, ErrorMessage} from "../../utils/consts";
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import Error from "../error/error";
import {AuthorizationStatus, Film} from "../../types";
import FilmPage from "../film-page/film-page";
import {getAuthorizationStatus, getAvatarUrl} from "../../reducer/user/selectors";
import {getAllFilms, getFavouriteFilms} from "../../reducer/data/selectors";
import {getError} from "../../reducer/error/selectors";
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

interface Props {
  allFilms: Array<Film>;
  authorizationStatus: AuthorizationStatus;
  avatarUrl: string;
  errorText: string;
  favouriteFilms: Array<Film>;
  onLogin: (AuthData) => void;
}

const AddReviewWrapped = withValidation(withForm(AddReview));
const FilmPageWrapped = withActiveItem(FilmPage);
const SignInWrapped = withValidation(SignIn);
const VideoPlayerWrapped = withVideo(VideoPlayer);

const App: React.FunctionComponent<Props> = (props: Props) => {
  const {
    allFilms,
    authorizationStatus,
    avatarUrl,
    errorText,
    favouriteFilms,
    onLogin,
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
                onSubmit={onLogin}
              />
              : <Redirect to={AppRoute.MAIN} />);
        }}/>
        <PrivateRoute exact path={`${AppRoute.FILMS}/:id${AppRoute.ADD_REVIEW}`} render={(routeProps) => {
          const id = Number(routeProps.match.params.id);
          const history = routeProps.history;

          return (
            <AddReviewWrapped
              avatarImage={avatarUrl}
              history={history}
              id={id}
            />
          );
        }}/>
        <PrivateRoute exact path={AppRoute.MY_LIST} render={() => {
          return (
            <MyList
              avatarImage={avatarUrl}
              filmsList={favouriteFilms}
            />
          );
        }}/>
        <Route render={() => (
          <React.Fragment>
            <h1>
              {ErrorStatusCode.NOT_FOUND}.
              <br />
              <small>{ErrorMessage.NOT_FOUND}</small>
            </h1>
            <Link to={AppRoute.MAIN}>{GO_BACK_MESSAGE}</Link>
          </React.Fragment>
        )}/>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  allFilms: getAllFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
  avatarUrl: getAvatarUrl(state),
  errorText: getError(state),
  favouriteFilms: getFavouriteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogin(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
