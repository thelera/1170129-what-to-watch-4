import * as React from "react";
import {Comment} from "../../types";
import {parseDate} from "../../utils/common";

interface Props {
  comments: Array<Comment>,
}

const renderComments: React.FunctionComponent<Props> = (props: Props) => {
  const {comments} = this.props;

  return comments.map((comment) => {
    const {comment: text, date, id, rating, user} = comment;
    const {name} = user;
    const formattedDate = parseDate(date);

    return (
      <div className="review" key={id}>
        <blockquote className="review__quote">
          <p className="review__text">{text}</p>

          <footer className="review__details">
            <cite className="review__author">{name}</cite>
            <time className="review__date" dateTime="2016-12-24">{formattedDate}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{rating}</div>
      </div>
    );
  });
};

const Comments = (props) => {
  const {comments} = props;
  const half = Math.round(comments.length / 2);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {renderComments(comments.slice(0, half))}
      </div>
      <div className="movie-card__reviews-col">
        {renderComments(comments.slice(half, comments.length))}
      </div>
    </div>
  );
};

export default Comments;
