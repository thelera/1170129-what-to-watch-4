const initialState = {
  error: ``,
};

const ActionType = {
  LOAD_ERROR: `LOAD_ERROR`,
};

const ActionCreator = {
  loadError: (errorMessage) => ({
    type: ActionType.LOAD_ERROR,
    payload: errorMessage,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ERROR:
      return Object.assign({}, state, {error: String(action.payload)});
    default:
      return state;
  }
};

export {ActionCreator, ActionType, reducer};
