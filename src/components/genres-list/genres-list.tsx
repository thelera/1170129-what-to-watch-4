import * as React from "react";
import {ActionCreator} from "../../reducer/data/data";
import {connect} from "react-redux";
import {Genre} from "../../types";
import {GENRES_COUNT} from "../../utils/consts";
import {getGenre} from "../../reducer/data/selectors";

interface Props {
  activeItem: Genre,
  activeGenre: Genre,
  onActiveClick: (Genre) => void,
  onGenreClick: (Genre) => void,
}

const GenresList: React.FunctionComponent<Props> = (props: Props) => {
  const {activeGenre, activeItem = activeGenre, onActiveClick, onGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {Object.values(Genre).slice(0, GENRES_COUNT).map((genre) => (
        <li
          className={`catalog__genres-item ${genre === activeItem ? `catalog__genres-item--active` : ``}`}
          key={genre}
        >
          <a
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();

              onGenreClick(genre);
              onActiveClick(genre);
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  activeGenre: getGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
