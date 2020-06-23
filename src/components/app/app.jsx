import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filmIndex: -1,
    };

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(index) {
    this.setState({
      filmIndex: index,
    });
  }

  _renderApp() {
    const {filmName, filmGenre, filmYear, filmsInfo} = this.props;
    const {filmIndex} = this.state;
    const film = filmsInfo[filmIndex];

    if (filmIndex === -1) {
      return (
        <Main
          name={filmName}
          genre={filmGenre}
          year={filmYear}
          films={filmsInfo}
          onClick={this._handleClick}
        />
      );
    }

    return (
      <FilmDetails
        backgroundImage={film.backgroundImage}
        description={film.description}
        director={film.director}
        genres={film.genres}
        image={film.image}
        ratingCount={film.ratingCount}
        ratingLevel={film.ratingLevel}
        ratingScore={film.ratingScore}
        starring={film.starring}
        title={film.title}
        year={film.year}
      />
    );
  }

  render() {
    const {filmsInfo} = this.props;
    const film = filmsInfo[0];

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film-details">
            <FilmDetails
              backgroundImage={film.backgroundImage}
              description={film.description}
              director={film.director}
              genres={film.genres}
              ratingCount={film.ratingCount}
              ratingLevel={film.ratingLevel}
              ratingScore={film.ratingScore}
              starring={film.starring}
              title={film.title}
              year={film.year}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmYear: PropTypes.number.isRequired,
  filmsInfo: PropTypes.array.isRequired,
};

export default App;
