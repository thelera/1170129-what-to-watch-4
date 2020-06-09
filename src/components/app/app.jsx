import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {filmName, filmGenre, filmYear} = props;

  return (
    <Main
      name = {filmName}
      genre = {filmGenre}
      year = {filmYear}
    />
  );
};

export default App;
