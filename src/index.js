import {ActionCreator, AuthorizationStatus} from "./reducer/user/user.js";
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
  store.dispatch(ActionCreator.requireOfAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createApi(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.loadPromoFilm());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

export {store};
