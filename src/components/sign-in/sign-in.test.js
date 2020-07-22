import configureStore from "redux-mock-store";
import {BrowserRouter} from "react-router-dom";
import NameSpace from "../../reducer/name-space.js";
import {Provider} from "react-redux";
import {SignIn} from "./sign-in.jsx";
import React from "react";
import renderer from "react-test-renderer";

const mockStore = configureStore([]);

it(`SignIn is rendered correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      error: `Error`,
    },
  });

  const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <SignIn
            error={`It's error message.`}
            validationMessage={`It's validation message.`}
            onSubmit={() => {}}
            onValidForm={() => {}}
          />
        </Provider>
      </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
