import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {BrowserRouter} from "react-router-dom";
import NameSpace from "../../reducer/name-space";
import {Provider} from "react-redux";
import {SignIn} from "./sign-in";

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
            onSubmit={() => null}
            onValidForm={() => null}
          />
        </Provider>
      </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
