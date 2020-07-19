import PropTypes from "prop-types";
import React from "react";

const Error = (props) => {
  const {message} = props;

  return (
    <div id="myModal" className="modal">
      <div className="modal-content" style={{padding: 20 + `px`, color: `red`}}>
        <p>{message}</p>
      </div>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
