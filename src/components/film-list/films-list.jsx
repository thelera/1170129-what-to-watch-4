import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import FilmCard from "../film-card/film-card.jsx";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {index: null};

    this._handleHover = this._handleHover.bind(this);
  }

  _handleHover(value) {
    this.setState({index: value});
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, index) =>
          <FilmCard
            index={index}
            key={film.title + index}
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
