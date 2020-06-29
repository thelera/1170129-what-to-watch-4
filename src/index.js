import App from "./components/app/app.jsx";
import {createStore} from "redux";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import {reducer} from "./reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const filmData = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
};

ReactDOM.render(
    <Provider store={store}>
      <App
        filmName={filmData.name}
        filmGenre={filmData.genre}
        filmYear={filmData.year}
      />
    </Provider>,
    document.querySelector(`#root`)
);
