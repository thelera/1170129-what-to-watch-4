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
    const {filmName, filmGenre, filmYear, filmsInfo} = this.props;
    const {filmIndex} = this.state;

    if (!filmIndex) {
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
        film={filmsInfo[filmIndex]}
      />
    );
  }

  render() {
    const {filmsInfo} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film-details">
            <FilmDetails
              film={filmsInfo[0]}
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
