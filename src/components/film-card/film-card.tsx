import * as React from "react";
import {AppRoute} from "../../utils/consts";
import {Film} from "../../types";
import {Link} from "react-router-dom";
import {Video} from "../../utils/consts";
import VideoPlayer from "../video-player/video-player";
import withVideo from "../../hocs/with-video/with-video";

interface Props {
  film: Film;
  isPlaying: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const VideoPlayerWrapped = withVideo(VideoPlayer);

const FilmCard: React.FunctionComponent<Props> = (props: Props) => {
  const {film, isPlaying, onMouseEnter, onMouseLeave} = props;
  const {id, title} = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <Link
        to={`${AppRoute.FILMS}/${id}`}
        className="small-movie-card__image"
        onMouseEnter={() => {
          onMouseEnter();
        }}
        onMouseLeave={onMouseLeave}
      >
        <VideoPlayerWrapped
          height={Video.HEIGHT}
          id={id}
          isPlaying={isPlaying}
          key={props.isPlaying}
          width={Video.WIDTH}
        />
      </Link>
      <h3 className="small-movie-card__title">
        <Link
          to={`${AppRoute.FILMS}/${id}`}
          className="small-movie-card__link">
          {title}
        </Link>
      </h3>
    </article>
  );
};

export default FilmCard;
