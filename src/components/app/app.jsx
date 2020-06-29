import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filmIndex: null,
    };

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(index) {
    this.setState({
      filmIndex: index,
    });
  }

  _renderApp() {
    const {filmName, filmGenre, filmYear, films} = this.props;
    const {filmIndex} = this.state;

    if (filmIndex === null) {
      return (
        <Main
          name={filmName}
          genre={filmGenre}
          year={filmYear}
          films={films}
          onClick={this._handleClick}
        />
      );
    }

    return (
      <FilmDetails
        film={films[filmIndex]}
        films={films}
        onClick={this._handleClick}
      />
    );
  }

  render() {
    const {films} = this.props;

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
              onClick={this._handleClick}
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
  films: PropTypes.array.isRequired,
};

export default App;
