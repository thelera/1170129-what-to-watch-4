import * as React from "react";
import {ActionCreator} from "../../reducer/data/data";
import {connect} from "react-redux";
import {SHOWING_FILMS_COUNT} from "../../utils/consts";

interface Props {
  onClick: () => void,
}

const ShowMoreButton: React.FunctionComponent<Props> = (props: Props) => {
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

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(ActionCreator.incrementFilmsCount(SHOWING_FILMS_COUNT));
  },
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
