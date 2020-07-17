import {API} from "../../utils/consts.js";
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
        dispatch(ActionCreator.requireOfAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.avatarURL(`${API.BASE_URL.slice(0, -4)}${response.data.avatar_url}`));
      })
      .catch((error) => {
        throw error;
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.requireOfAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.avatarURL(`${API.BASE_URL.slice(0, -4)}${response.data.avatar_url}`));
      })
      .catch((err) => {
        throw err;
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
