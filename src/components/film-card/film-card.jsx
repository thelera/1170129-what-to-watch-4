import PropTypes from "prop-types";
import React from "react";

const FilmCard = (props) => {
  const {image, title, index, onClick, onHover} = props;

  return (
    <article className="small-movie-card catalog__movies-card"
      onClick={(evt) => {
        evt.preventDefault();

        onClick(index);
      }}
      onMouseOver={() => {
        onHover(index);
      }}
    >
      <div className="small-movie-card__image">
        <img src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" onClick={onClick}>{title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
};

export default FilmCard;
