import {parseDate} from "../../utils/common";
import PropTypes from "prop-types";
import React from "react";

const renderComments = (comments) => {
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

Comments.propTypes = {
  comments: PropTypes.array,
  date: PropTypes.string,
  id: PropTypes.number,
  rating: PropTypes.number,
  user: PropTypes.object,
};

export default Comments;
