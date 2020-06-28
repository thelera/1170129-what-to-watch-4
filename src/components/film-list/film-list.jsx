import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import FilmCard from "../film-card/film-card.jsx";

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {index: null};

    this._handleHover = this._handleHover.bind(this);
  }

  _handleHover(value) {
    this.setState({index: value});
  }

  render() {
    const {films, onClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, index) =>
          <FilmCard
            film={film}
            index={index}
            key={film.title + index}
            onClick={onClick}
            onHover={this._handleHover}
          />)}
      </div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilmList;
