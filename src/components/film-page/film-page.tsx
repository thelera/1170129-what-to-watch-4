import * as React from "react";
import {AppRoute} from "../../utils/consts";
import {Comment, Film, FilmPageTab} from "../../types";
import Comments from "../comments/comments";
import {connect} from "react-redux";
import Error from "../error/error";
import FilmDetails from "../film-details/film-details";
import FilmsList from "../films-list/films-list";
import FilmOverview from "../film-overview/film-overview";
import Footer from "../footer/footer";
import {getSimilarFilmsByGenre} from "../../utils/common";
import {getAllFilms} from "../../reducer/data/selectors";
import {getComments} from "../../reducer/comments/selectors";
import {getElementById} from "../../utils/common";
import {getError} from "../../reducer/errors/selectors";
import Header from "../header/header";
import {Link} from "react-router-dom";
import {Operation as DataOperation} from "../../reducer/data/data";
import {Operation as CommentsOperation} from "../../reducer/comments/comments";
import Tabs from "../tabs/tabs";

interface Props {
  activeItem: FilmPageTab,
  avatarImage: string,
  comments: Array<Comment>,
  errorText: string,
  film: Film,
  filmsList: Array<Film>
  loadComments: (number) => void,
  onActiveClick: () => void,
  onAddToMyListClick: (number, boolean) => void,
}

class FilmPage extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  _renderTabs() {
    const {activeItem: activeTab = FilmPageTab.OVERVIEW, comments, film} = this.props;

    switch (activeTab) {
      case FilmPageTab.OVERVIEW:
        return (
          <FilmOverview
            film={film}
          />
        );

      case FilmPageTab.DETAILS:
        return (
          <FilmDetails
            film={film}
          />
        );

      case FilmPageTab.REVIEWS:
        return (
          <Comments
            comments={comments}
          />
        );
    }

    return null;
  }

  componentDidMount() {
    const {film, loadComments} = this.props;

    loadComments(film.id);
  }

  render() {
    const {
      activeItem: activeTab = FilmPageTab.OVERVIEW,
      errorText,
      film,
      filmsList: filmsByGenre,
      onActiveClick: onTabClick,
      onAddToMyListClick,
    } = this.props;

    const {backgroundImage, genre, id, image, isFavourite, title, year} = film;

    return (
      <React.Fragment>
        {
          errorText &&
          <Error
            message={errorText}
          />
        }

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

            <Header
              className={`movie-card__head`}
              isLinkToMyList={true}
              isUserBlock={true}
            />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{year}</span>
                </p>

                <div className="movie-card__buttons">
                  <Link
                    to={`${AppRoute.PLAYER}/${id}`}
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
                  {this._renderTabs()}
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

          <Footer/>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  comments: getComments(state),
  errorText: getError(state),
  film: getElementById(getAllFilms(state), ownProps.id),
  filmsList: getSimilarFilmsByGenre(getAllFilms(state), ownProps.id),
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(CommentsOperation.loadComments(id));
  },
  onAddToMyListClick(id, isFavourite) {
    dispatch(DataOperation.addFilmToFavourites(id, isFavourite));
  },
});

export {FilmPage};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
