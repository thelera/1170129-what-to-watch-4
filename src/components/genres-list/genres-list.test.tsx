import * as React from "react";
import * as renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {Genre} from "../../types";
import {Provider} from "react-redux";
import {GenresList} from "./genres-list";

const mockStore = configureStore([]);

it(`GenresList is rendered correctly`, () => {
  const store = mockStore({
    genres: [`Action`, `Drama`, `Western`, `Story`],
  });

  const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <GenresList
            activeGenre={Genre.ADVENTURE}
            activeItem={Genre.ADVENTURE}
            onActiveClick={() => null}
            onGenreClick={() => null}
          />
        </Provider>
      </BrowserRouter>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
