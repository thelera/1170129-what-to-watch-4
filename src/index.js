import App from "./components/app/app.jsx";
import React from "react";
import ReactDOM from "react-dom";
import films from "./mocks/films.js";

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
      films={films}
    />,
    document.querySelector(`#root`)
);
