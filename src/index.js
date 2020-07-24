import {ActionCreator as UserActionCreator, AuthorizationStatus} from "./reducer/user/user.js";
import {ActionCreator as ErrorActionCreator} from "./reducer/errors/errors.js";
import App from "./components/app/app.jsx";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createApi} from "./api.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {Operation as UserOperation} from "./reducer/user/user.js";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import reducer from "./reducer/reducer.js";
import thunk from "redux-thunk";

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.requireOfAuthorization(AuthorizationStatus.NO_AUTH));
};

const resetError = () => {
  store.dispatch(ErrorActionCreator.resetError());
};

const api = createApi(onUnauthorized, resetError);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadFilms())
.then(() => {
  return store.dispatch(DataOperation.loadPromoFilm());
})
.then(() => {
  return store.dispatch(UserOperation.checkAuth());
});

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

export {store};
