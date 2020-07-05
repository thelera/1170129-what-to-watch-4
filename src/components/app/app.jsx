import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
  const {film, filmsList} = props;

  const renderApp = () => {
    if (!film) {
      return (
        <Main/>
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
};

const mapStateToProps = (state) => ({
  film: state.allFilms[state.index],
  filmsList: state.filmsList,
});

export {App};
export default connect(mapStateToProps)(App);
