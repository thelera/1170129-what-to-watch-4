import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {FILM_NAMES} from "./utils/consts.js";

const filmData = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
};

ReactDOM.render(
    <App
      filmName={filmData.name}
      filmGenre={filmData.genre}
      filmYear={filmData.year}
      filmNames={FILM_NAMES}
    />,
    document.querySelector(`#root`)
);
