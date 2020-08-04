import * as React from "react";
import * as ReactDOM from "react-dom";
import {AuthorizationStatus} from "./types";
import {ActionCreator as UserActionCreator} from "./reducer/user/user";
import {ActionCreator as ErrorActionCreator} from "./reducer/error/error";
import App from "./components/app/app";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createApi} from "./api";
import {Operation as DataOperation} from "./reducer/data/data";
import {Operation as UserOperation} from "./reducer/user/user";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
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
