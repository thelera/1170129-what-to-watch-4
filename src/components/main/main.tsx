import * as React from "react";
import {AppRoute} from "../../utils/consts";
import {connect} from "react-redux";
import Error from "../error/error";
import {Film} from "../../types";
import FilmsList from "../films-list/films-list";
import Footer from "../footer/footer";
import GenresList from "../genres-list/genres-list";
import {getError} from "../../reducer/errors/selectors";
import Header from "../header/header";
import {getFilmsListByGenre, getShowedFilmsCount, getPromoFilm} from "../../reducer/data/selectors";
import {Link} from "react-router-dom";
import {Operation as DataOperation} from "../../reducer/data/data";
import ShowMoreButton from "../show-more-button/show-more-button";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

interface Props {
  avatarImage: string;
  errorText: string;
  filmsCount: number;
  filmsList: Array<Film>;
  promoFilm: Film;
  onAddToMyListClick: (number, boolean) => void;
}

const GenresListWrapped = withActiveItem(GenresList);

const Main: React.FunctionComponent<Props> = (props: Props) => {
  const {
    errorText,
    filmsCount,
    filmsList,
    promoFilm,
    onAddToMyListClick,
  } = props;

  const {
    backgroundImage,
    genre,
    id,
    image,
    isFavourite,
    title,
    year
  } = promoFilm;

  return (
    <div>
      {
        errorText &&
        <Error
          message={errorText}
        />
      }
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          className={`movie-card__head`}
          isLinkToMyList={true}
          isMain={true}
          isUserBlock={true}
        />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={image} alt={title} width="218" height="327" />
            </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresListWrapped/>

          <FilmsList
            films={filmsList}
          />

          <div className="catalog__more">
            {filmsList.length >= filmsCount && <ShowMoreButton/>}
          </div>
        </section>

        <Footer
          isMain={true}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errorText: getError(state),
  filmsCount: getShowedFilmsCount(state),
  filmsList: getFilmsListByGenre(state).slice(0, getShowedFilmsCount(state)),
  promoFilm: getPromoFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAddToMyListClick(id, isFavourite) {
    dispatch(DataOperation.addFilmToFavourites(id, isFavourite));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
