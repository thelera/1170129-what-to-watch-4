import AddReview from "../add-review/add-review.jsx";
import {AppRoute} from "../../utils/consts.js";
import {AuthorizationStatus} from "../../utils/consts.js";
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import {getAuthorizationStatus, getAvatarURL} from "../../reducer/user/selectors.js";
import {getAllFilms, getFavouriteFilms} from "../../reducer/data/selectors.js";
import {Link} from "react-router-dom";
import Main from "../main/main.jsx";
import MyList from "../my-list/my-list.jsx";
import {Operation as CommentsOperation} from "../../reducer/comments/comments.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import PrivateRoute from "../private-route/private-route.jsx";
import PropTypes from "prop-types";
import React, {Fragment} from "react";
import SignIn from "../sign-in/sign-in.jsx";
import VideoPlayer from "../video-player/video-player.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import withForm from "../../hocs/with-form/with-form.js";
import withVideo from "../../hocs/with-video/with-video.js";
import withValidation from "../../hocs/with-validation/with-validation.js";

const AddReviewWrapped = withValidation(withForm(AddReview));
const FilmDetailsWrapped = withActiveItem(FilmDetails);
const SignInWrapped = withValidation(SignIn);
const VideoPlayerWrapped = withVideo(VideoPlayer);

const App = (props) => {
  const {
    addComment,
    allFilms,
    authorizationStatus,
    avatarURL,
    favouriteFilms,
    loadComments,
    login,
    onMyListClick
  } = props;

  if (allFilms.length === 0) {
    return (
      <div></div>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Redirect to={AppRoute.MAIN}/>
        </Route>
        <Route exact path={AppRoute.MAIN}>
          <Main
            authorizationStatus={authorizationStatus}
            avatarImage={avatarURL}
            onMyListClick={onMyListClick}
          />
        </Route>
        <Route exact path={`${AppRoute.FILMS}:id`} render={(props) => {
          const id = Number(props.match.params.id);
          const film = allFilms.find((film) => film.id === id);

          loadComments(id);

          return (
            <FilmDetailsWrapped
              authorizationStatus={authorizationStatus}
              avatarImage={avatarURL}
              film={film}
              onMyListClick={onMyListClick}
            />
          );
        }}/>
        <Route exact path={`${AppRoute.PLAYER}:id`} render={(props) => {
          const id = Number(props.match.params.id);
          const movie = allFilms.find((film) => film.id === id);
          const {preview, videoLink} = movie;

          console.log(props.history);


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
        <Route exact path={AppRoute.LOGIN} render={() => {
          return (
            authorizationStatus === AuthorizationStatus.NO_AUTH
              ? <SignInWrapped
                onSubmit={login}
              />
              : <Redirect to={AppRoute.ROOT} />);
        }}/>
        <PrivateRoute exact path={`${AppRoute.FILMS}:id${AppRoute.ADD_REVIEW}`} render={(props) => {
          const id = Number(props.match.params.id);
          const film = allFilms.find((film) => film.id === id);

          return (
            <AddReviewWrapped
              avatarImage={avatarURL}
              film={film}
              history={props.history}
              onSubmit={addComment}
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
  addComment: PropTypes.func.isRequired,
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
  authorizationStatus: PropTypes.string.isRequired,
  avatarURL: PropTypes.string,
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
  loadComments: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  onMyListClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allFilms: getAllFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
  avatarURL: getAvatarURL(state),
  favouriteFilms: getFavouriteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  addComment(id, comment, history) {
    dispatch(CommentsOperation.addComment(id, comment, history));
  },
  loadComments(id) {
    dispatch(CommentsOperation.loadComments(id));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onMyListClick() {
    dispatch(DataOperation.loadFavouriteFilms());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
