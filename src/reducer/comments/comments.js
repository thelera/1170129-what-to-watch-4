import {ActionCreator as ErrorActionCreator} from "../errors/errors.js";
import {ErrorMessage} from "../../utils/consts.js";

const initialState = {
  comments: [],
};

const ActionType = {
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};

const ActionCreator = {
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
};

const Operation = {
  addComment: (id, comment) => (dispatch, getState, api) => {
    return api.post(`/comments/${id}`, {
      rating: comment.rating,
      comment: comment.text,
    })
    .then((response) => {
      dispatch(ActionCreator.loadComments(response.data));
    })
    .catch((err) => {
      dispatch(ErrorActionCreator.loadError(ErrorMessage.SENDING));

      throw err;
    });
  },
  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
    .then((response) => {
      dispatch(ActionCreator.loadComments(response.data));
    })
    .catch(() => {
      dispatch(ErrorActionCreator.loadError(ErrorMessage.LOADING));
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return Object.assign({}, state, {comments: action.payload});
    default:
      return state;
  }
};

export {ActionCreator, ActionType, Operation, reducer};
