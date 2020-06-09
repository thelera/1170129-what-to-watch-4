import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const filmData = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
};

ReactDOM.render(
    <App
      filmName = {filmData.name}
      filmGenre={filmData.genre}
      filmYear={filmData.year}
    />,
    document.querySelector(`#root`)
);
