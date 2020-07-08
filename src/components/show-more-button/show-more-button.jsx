import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import {SHOWING_FILMS_COUNT} from "../../utils/consts.js";

const ShowMoreButton = (props) =>
  <button
    className="catalog__button"
    type="button"
    onClick={() => props.onClick(SHOWING_FILMS_COUNT)}>Show more
  </button>;

ShowMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick(count) {
    dispatch(ActionCreator.incrementOfFilmsCountAction(count));
  },
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
