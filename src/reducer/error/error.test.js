import {ActionCreator, ActionType, reducer} from "./error";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    error: null,
  });
});

it(`Reducer should change error by a given value`, () => {
  expect(reducer({
    error: null,
  }, {
    type: ActionType.LOAD_ERROR,
    payload: `new error`,
  })).toEqual({
    error: `new error`,
  });

  expect(reducer({
    error: `error`,
  }, {
    type: ActionType.RESET_ERROR,
  })).toEqual({
    error: null,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for load error returns correct action`, () => {
    expect(ActionCreator.loadError(`new error`)).toEqual({
      type: ActionType.LOAD_ERROR,
      payload: `new error`,
    });
  });

  it(`Action creator for reset error returns correct action`, () => {
    expect(ActionCreator.resetError()).toEqual({
      type: ActionType.RESET_ERROR,
    });
  });
});
