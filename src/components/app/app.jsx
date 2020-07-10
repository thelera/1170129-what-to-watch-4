import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import React from "react";
import {getFilmById, getFilmsListByGenre, getPromofilm} from "../../reducer/data/selectors.js";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";

const FilmDetailsWrapped = withActiveItem(FilmDetails);

const App = (props) => {
  const {film, filmsList, promoFilm} = props;

  console.log(promoFilm);

  const renderApp = () =>
    film ? (
      <FilmDetailsWrapped
        film={film}
        filmsList={filmsList}
        key={film.id}
      />
    ) : (
      <Main
        filmsList={filmsList}
        promoFilm={promoFilm}
      />
    );

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {renderApp()}
        </Route>
        <Route exact path="/dev-film-details">
          <FilmDetails
            film={film}
            filmsList={filmsList}
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
  filmsList: PropTypes.array.isRequired,
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
  }),
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
  film: getFilmById(state),
  filmsList: getFilmsListByGenre(state),
  promoFilm: getPromofilm(state),
}};

export {App};
export default connect(mapStateToProps)(App);
