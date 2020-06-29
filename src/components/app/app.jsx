import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import {Genre} from "../../utils/consts.js"
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {Provider} from "react-redux"
import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {filmIndex, filmName, filmGenre, filmYear, films, genre, onFilmCardClick, onGenreClick} = this.props;

    if (filmIndex === -1) {
      return (
        <Main/>
      );
    }

    return (
      <FilmDetails
        film={films[filmIndex]}
        films={films}
        onClick={onFilmCardClick}
      />
    );
  }

  render() {
    const {films, onFilmCardClick} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film-details">
            <FilmDetails
              film={films[0]}
              films={films}
              onClick={onFilmCardClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  allFilms: PropTypes.array.isRequired,
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmYear: PropTypes.number.isRequired,
  filmIndex: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
  genre: PropTypes.oneOf(Object.values(Genre)).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allFilms: state.allFilms,
  filmIndex: state.index,
  films: state.films,
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(filmIndex) {
    dispatch(ActionCreator.getFilmDetails(filmIndex));
  },
  onGenreClick(films, genre) {
    dispatch(ActionCreator.changeGenreAction(genre));
    dispatch(ActionCreator.getFilmListByGenreAction(films, genre));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
