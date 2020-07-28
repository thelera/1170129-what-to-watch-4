import {BrowserRouter} from "react-router-dom";
import * as React from "react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-listx";

const mockStore = configureStore([]);

it(`GenresList is rendered correctly`, () => {
  const store = mockStore({
    genres: [`Action`, `Drama`, `Western`, `Story`],
  });

  const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <GenresList
            onActiveClick={() => { }}
            onGenreClick={() => { }}
          />
        </Provider>
      </BrowserRouter>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
