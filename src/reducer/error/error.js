const initialState = {
  error: null,
};

const ActionType = {
  LOAD_ERROR: `LOAD_ERROR`,
  RESET_ERROR: `RESET_ERROR`,
};

const ActionCreator = {
  loadError: (errorMessage) => ({
    type: ActionType.LOAD_ERROR,
    payload: errorMessage,
  }),
  resetError: () => ({
    type: ActionType.RESET_ERROR,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ERROR:
      return Object.assign({}, state, {error: String(action.payload)});
    case ActionType.RESET_ERROR:
      return Object.assign({}, state, {error: null});
    default:
      return state;
  }
};

export {ActionCreator, ActionType, reducer};
