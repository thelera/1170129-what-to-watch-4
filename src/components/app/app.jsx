import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import React from "react";
import {Selector} from "../../reducer.js";

const App = (props) => {
  const {film, filmsList, promoFilm} = props;

  const renderApp = () => {
    if (!film) {
      return (
        <Main
          filmsList={filmsList}
          promoFilm={promoFilm}
        />
      );
    }

    return (
      <FilmDetails
        film={film}
        filmsList={filmsList}
      />
    );
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
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    director: PropTypes.arrayOf(PropTypes.string).isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    ratingScore: PropTypes.number.isRequired,
    runTime: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
  filmsList: PropTypes.array.isRequired,
  promoFilm: PropTypes.shape({
    backgroundImage: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    director: PropTypes.arrayOf(PropTypes.string).isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    ratingScore: PropTypes.number.isRequired,
    runTime: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  film: Selector.getFilmById(state),
  filmsList: Selector.getFilmsListByGenre(state),
  promoFilm: state.promoFilm,
});

export {App};
export default connect(mapStateToProps)(App);
