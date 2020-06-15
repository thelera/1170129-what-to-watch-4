import PropTypes from "prop-types";
import React from "react";
import Main from "../main/main.jsx";
import {FILM_NAMES} from "../../utils/consts.js";

const App = (props) => {
  const {filmName, filmGenre, filmYear, filmNames} = props;

  return (
    <Main
      name = {filmName}
      genre = {filmGenre}
      year = {filmYear}
      filmNames = {filmNames}
    />
  );
};

App.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmYear: PropTypes.number.isRequired,
  filmNames: PropTypes.arrayOf(PropTypes.oneOf(FILM_NAMES)).isRequired,
};

export default App;
