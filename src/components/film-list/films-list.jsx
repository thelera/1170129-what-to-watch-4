import FilmCard from "../film-card/film-card.jsx";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import withFilmCard from "../../hocs/with-film-card/with-film-card.js";

const FilmCardWrapped = withFilmCard(FilmCard);

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {id: null};

    this._handleHover = this._handleHover.bind(this);
  }

  _handleHover(value) {
    this.setState({id: value});
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) =>
          <FilmCardWrapped
            film={film}
            key={film.id}
            onHover={this._handleHover}
          />)}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsList;