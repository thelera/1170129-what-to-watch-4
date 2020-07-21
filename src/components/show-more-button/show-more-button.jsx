import {ActionCreator} from "../../reducer/data/data.js";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import {SHOWING_FILMS_COUNT} from "../../utils/consts.js";

const ShowMoreButton = (props) => {
  const {onClick} = props;

  return (
    <button
      className="catalog__button"
      type="button"
      onClick={onClick}
    >
      Show more
    </button>
  );
};

ShowMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(ActionCreator.incrementFilmsCount(SHOWING_FILMS_COUNT));
  },
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
