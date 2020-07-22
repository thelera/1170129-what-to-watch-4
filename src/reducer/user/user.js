import {ActionCreator as ErrorActionCreator} from "../errors/errors.js";
import {Api, ErrorMessage, ErrorStatus} from "../../utils/consts.js";
import {AuthorizationStatus} from "../../utils/consts.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  avatarUrl: null,
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  AVATAR_URL: `AVATAR_URL`,
};

const ActionCreator = {
  requireOfAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  avatarURL: (URL) => ({
    type: ActionType.AVATAR_URL,
    payload: URL,
  }),
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        if (response && response.status === ErrorStatus.OK.code) {
          dispatch(ErrorActionCreator.resetError());
          dispatch(ActionCreator.requireOfAuthorization(AuthorizationStatus.AUTH));
          dispatch(ActionCreator.avatarURL(`${Api.BASE_URL.slice(0, -4)}${response.data.avatar_url}`));
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === ErrorStatus.UNAUTHORIZED.code) {
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
        if (response && response.status === ErrorStatus.OK.code) {
          dispatch(ErrorActionCreator.resetError());
          dispatch(ActionCreator.requireOfAuthorization(AuthorizationStatus.AUTH));
          dispatch(ActionCreator.avatarURL(`${Api.BASE_URL.slice(0, -4)}${response.data.avatar_url}`));
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === ErrorStatus.UNAUTHORIZED.code) {
          return;
        }
        dispatch(ErrorActionCreator.loadError(ErrorMessage.AUTHORIZATION));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {authorizationStatus: action.payload});
    case ActionType.AVATAR_URL:
      return Object.assign({}, state, {avatarURL: action.payload});
    default:
      return state;
  }
};

export {ActionCreator, ActionType, AuthorizationStatus, Operation, reducer};
