import {ActionCreator as ErrorActionCreator} from "../error/error";
import {Api, ErrorMessage, ErrorStatusCode} from "../../utils/consts";
import {AuthorizationStatus} from "../../types";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  avatarUrl: null,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  AVATAR_URL: `AVATAR_URL`,
};

const ActionCreator = {
  requireOfAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  avatarUrl: (url) => ({
    type: ActionType.AVATAR_URL,
    payload: url,
  }),
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireOfAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.avatarUrl(`${Api.BASE_URL.slice(0, -4)}${response.data.avatar_url}`));
      })
      .catch((err) => {
        if (err.response && err.response.status === ErrorStatusCode.UNAUTHORIZED) {
          return;
        }
        dispatch(ErrorActionCreator.loadError(ErrorMessage.AUTHORIZATION));
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.requireOfAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.avatarUrl(`${Api.BASE_URL.slice(0, -4)}${response.data.avatar_url}`));
      })
      .catch((err) => {
        if (err.response && err.response.status === ErrorStatusCode.UNAUTHORIZED) {
          return;
        }
        dispatch(ErrorActionCreator.loadError(ErrorMessage.AUTHORIZATION));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {authorizationStatus: action.payload});
    case ActionType.AVATAR_URL:
      return Object.assign({}, state, {avatarUrl: action.payload});
    default:
      return state;
  }
};

export {ActionCreator, ActionType, AuthorizationStatus, Operation, reducer};
