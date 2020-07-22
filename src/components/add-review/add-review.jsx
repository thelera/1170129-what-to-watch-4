import {AppRoute} from "../../utils/consts";
import {connect} from "react-redux";
import {createRange, getElementById, getValidationMessage} from "../../utils/common.js";
import Error from "../error/error.jsx";
import {getAllFilms} from "../../reducer/data/selectors.js";
import {getError} from "../../reducer/errors/selectors.js";
import Header from "../header/header.jsx";
import {Link} from "react-router-dom";
import {MAX_RATING} from "../../utils/consts.js";
import {Operation as CommentsOperation} from "../../reducer/comments/comments.js";
import PropTypes from "prop-types";
import React, {Fragment} from "react";

const AddReview = (props) => {
  const {
    error: errorText,
    isDisabled,
    film,
    history,
    score,
    text,
    validationMessage,
    onDisable,
    onRatingChange,
    onSubmit,
    onTextChange,
    onValidForm,
  } = props;

  const {id: filmId, image, preview, title} = film;

  const range = createRange(1, MAX_RATING);

  const textValidationMessage = getValidationMessage(score, text);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (textValidationMessage.length === 0) {
      onDisable(true);
      onSubmit(filmId, {rating: score, text})
      .then(() => {
        history.push(`${AppRoute.FILMS}/${filmId}`);
      })
      .catch(() => {
        onDisable(false);
      });
    } else {
      onValidForm(textValidationMessage);
    }
  };

  return (
    <Fragment>
      <div className="visually-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <symbol id="add" viewBox="0 0 19 20">
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"/>
            </g>
          </symbol>
          <symbol id="full-screen" viewBox="0 0 27 27">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
          </symbol>
          <symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5"/>
          </symbol>
          <symbol id="pause" viewBox="0 0 14 21">
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"/>
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"/>
            </g>
          </symbol>
        </svg>
      </div>

      {errorText &&
        <Error
          message={errorText}
        />}

      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={preview} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header
            isLinkToMyList={true}
          >
            {<nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`${AppRoute.FILMS}/${filmId}`} className="breadcrumbs__link">{title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>}
          </Header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={image} alt={title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form
            action="#"
            className="add-review__form"
            onSubmit={(evt) => {
              handleSubmit(evt);
            }}
          >

            {validationMessage &&
              <div>
                <p>{validationMessage}</p>
              </div>}

            <div className="rating">
              <div className="rating__stars">
                {range.map((number) => {
                  return (
                    <Fragment key={number}>
                      <input
                        className="rating__input"
                        id={`star-${number}`}
                        disabled={isDisabled}
                        type="radio"
                        name="rating"
                        value={number}
                        onChange={() => {
                          onRatingChange(number);
                        }}
                        checked={number === score}
                      />
                      <label className="rating__label" htmlFor={`star-${number}`}>Rating {number}</label>
                    </Fragment>
                  );
                })}
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                disabled={isDisabled}
                name="review-text"
                id="review-text"
                placeholder="Review text from 50 to 500 symbols"
                onChange={(evt) => {
                  onTextChange(evt.target.value);
                  onValidForm(textValidationMessage);
                }
                }>
              </textarea>
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  disabled={validationMessage.length > 0 || isDisabled}>
                    Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

AddReview.propTypes = {
  avatarImage: PropTypes.string.isRequired,
  error: PropTypes.string,
  film: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    ratingScore: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  history: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  validationMessage: PropTypes.string.isRequired,
  onDisable: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onValidForm: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  error: getError(state),
  film: getElementById(getAllFilms(state), ownProps.id),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, comment) {
    return dispatch(CommentsOperation.addComment(id, comment));
  },
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
