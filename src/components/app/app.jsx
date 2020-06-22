import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import React from "react";

const handleClick = () => {};

const App = (props) => {
  const {filmName, filmGenre, filmYear, filmsInfo} = props;

  return (
    <Main
      name={filmName}
      genre={filmGenre}
      year={filmYear}
      films={filmsInfo}
      onClick={handleClick}
    />
  );
};

App.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmYear: PropTypes.number.isRequired,
  filmsInfo: PropTypes.array.isRequired,
};

export default App;
