import {AppRoute, FilmDetailsTab} from "../../utils/consts.js";
import {AuthorizationStatus} from "../../utils/consts.js";
import Comments from "../../components/comments/comments.jsx";
import {connect} from "react-redux";
import FilmsList from "../films-list/films-list.jsx";
import {fromMinToHours, getRatingLevel} from "../../utils/common.js";
import {getComments} from "../../reducer/comments/selectors.js";
import {getFilmsListByGenre, getId} from "../../reducer/data/selectors.js";
import {Link} from "react-router-dom";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import {removeFromArray} from "../../utils/common.js";
import {SIMILAR_FILMS_COUNT} from "../../utils/consts.js";
import Tabs from "../tabs/tabs.jsx";

class FilmDetails extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderTabs() {
    const {comments, film} = this.props;
    const {description, director, ratingCount, ratingScore, runTime, starring} = film;
    const time = fromMinToHours(runTime);

    switch (activeTab) {
      case FilmDetailsTab.OVERVIEW:
        return (
          <div>
            <div className="movie-rating">
              <div className="movie-rating__score">{ratingScore}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{getRatingLevel(ratingScore)}</span>
                <span className="movie-rating__count">{ratingCount} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">
              <p>{description}</p>

              <p className="movie-card__director"><strong>Director: {director}</strong></p>

              <p className="movie-card__starring"><strong>Starring: {starring.map((star) => star).join(`, `)} and other</strong></p>
            </div>
          </div>
        );

      case FilmDetailsTab.DETAILS:
        return (
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">{director}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value">
                  {starring.map((star, index) => <React.Fragment key={index}>{star}<br /></React.Fragment>)}
                </span>
              </p>
            </div>
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Run Time</strong>
                <span className="movie-card__details-value">{time}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Genre</strong>
                <span className="movie-card__details-value">{genre}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Released</strong>
                <span className="movie-card__details-value">{year}</span>
              </p>
            </div>
          </div>
        );

      case FilmDetailsTab.REVIEWS:
        return (
          <Comments
            comments={comments}
          />
        );
    }

    return null;
  };

  componentDidMount() {
    const {film} = this.props;

    //loadComments(film.id);
  }

  render() {
    const {
      activeItem: activeTab = FilmDetailsTab.OVERVIEW,
      authorizationStatus,
      avatarImage,
      film,
      filmsList: filmsByGenre,
      onActiveClick: onTabClick,
      onAddToMyListClick,
    } = this.props;
  
    const {backgroundImage, genre, id, image, isFavourite, title, year} = film;
  
    return (
      <React.Fragment>
        <div className="visually-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> <symbol id="add" viewBox="0 0 19 20">
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859" />
            </g>
          </symbol><symbol id="full-screen" viewBox="0 0 27 27">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
          </symbol><symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5" />
          </symbol><symbol id="pause" viewBox="0 0 14 21">
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21" />
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21" />
            </g>
          </symbol></svg>
        </div >
  
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt={title} />
            </div>
  
            <h1 className="visually-hidden">WTW</h1>
  
            <header className="page-header movie-card__head">
              <div className="logo">
                <Link to={AppRoute.MAIN} className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>
  
              <div className="user-block">
                <Link to={AppRoute.MY_LIST} className="user-block__link">
                  {authorizationStatus === AuthorizationStatus.NO_AUTH && `Sign In`}
                  {authorizationStatus === AuthorizationStatus.AUTH &&
                    <div className="user-block__avatar">
                      <img src={avatarImage} alt="User avatar" width="63" height="63" />
                    </div>}
                </Link>
              </div>
            </header>
  
            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{year}</span>
                </p>
  
                <div className="movie-card__buttons">
                  <Link
                    to={`${AppRoute.PLAYER}${id}`}
                    className="btn btn--play movie-card__button"
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </Link>
                  <button className="btn btn--list movie-card__button" type="button" onClick={() => {
                    onAddToMyListClick(id, isFavourite);
                  }}>
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      {isFavourite ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
                    </svg>
                    <span>My list</span>
                  </button>
                  <Link to={`${AppRoute.FILMS}/${id}${AppRoute.ADD_REVIEW}`} className="btn movie-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div >
  
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={image} alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>
  
              <div className="movie-card__desc">
                <Tabs
                  id={id}
                  tab={activeTab}
                  onTabClick={onTabClick}
                >
                  {_renderTabs()}
                </Tabs>
              </div>
            </div>
          </div>
        </section >
  
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
  
            <FilmsList
              films={filmsByGenre}
            />
          </section>
  
          <footer className="page-footer">
            <div className="logo">
              <Link to={AppRoute.MAIN} className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
  
            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
};

FilmDetails.propTypes = {
  activeItem: PropTypes.oneOf(Object.values(FilmDetailsTab)),
  authorizationStatus: PropTypes.string.isRequired,
  avatarImage: PropTypes.string,
  comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        }).isRequired,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
  ).isRequired,
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
  filmsList: PropTypes.array.isRequired,
  loadComments: PropTypes.func.isRequired,
  onActiveClick: PropTypes.func.isRequired,
  onAddToMyListClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  comments: getComments(state),
  filmsList: removeFromArray(getFilmsListByGenre(state), getId(state)).slice(0, SIMILAR_FILMS_COUNT),
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(CommentsOperation.loadComments(id));
  },
  onAddToMyListClick(id, isFavourite) {
    dispatch(DataOperation.addFilmToFavourites(id, isFavourite));
  },
});

export {FilmDetails};
export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);
