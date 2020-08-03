import * as React from "react";
import {Film} from "../../types";
import FilmCard from "../film-card/film-card";
import withTimerOnHover from "../../hocs/with-timer-on-hover/with-timer-on-hover";

interface Props {
  films: Array<Film>;
  id?: number;
}

const FilmCardWrapped = withTimerOnHover(FilmCard);

const FilmsList: React.FunctionComponent<Props> = (props: Props) => {
  const {films} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) =>
        <FilmCardWrapped
          film={film}
          key={film.id}
        />)}
    </div>
  );
};

export default FilmsList;
