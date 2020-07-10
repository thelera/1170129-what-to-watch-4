import App from "./components/app/app.jsx";
import {applyMiddleware, createStore} from "redux";
import {createAPI} from "./api.js";
import {ActionCreator, Operation, reducer} from "./reducer.js";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireOfAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(Operation.loadingOfMovies());
store.dispatch(Operation.loadingOfPromoFilm());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
