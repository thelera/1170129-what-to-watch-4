import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {allFilms, filmIndex, onFilmCardClick} = this.props;

    if (filmIndex === -1) {
      return (
        <Main/>
      );
    }

    return (
      <FilmDetails
        allFilms={allFilms}
        film={allFilms[filmIndex]}
        onClick={onFilmCardClick}
      />
    );
  }

  render() {
    const {allFilms, onFilmCardClick} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film-details">
            <FilmDetails
              allFilms={allFilms}
              film={allFilms[0]}
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
  filmIndex: PropTypes.number.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allFilms: state.allFilms,
  filmIndex: state.index,
});

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(filmIndex) {
    dispatch(ActionCreator.getFilmDetails(filmIndex));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
