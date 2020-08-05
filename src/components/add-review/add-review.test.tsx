import * as React from "react";
import * as renderer from "react-test-renderer";
import {AddReview} from "./add-review";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {createMemoryHistory} from 'history';
import {Film} from "../../types";
import NameSpace from "../../reducer/name-space";
import {Provider} from "react-redux";

const mockStore = configureStore([]);
const history = createMemoryHistory();

const film: Film = {
  backgroundColor: `#E45322`,
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  director: `David Yates`,
  genre: `Fantasy`,
  id: 345712414,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  isFavourite: true,
  preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  ratingScore: 7.2,
  ratingCount: 248,
  runTime: 231,
  starring: [`Eddie Redmayne`, `Katherine Waterson`, `Dan Folger`],
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  year: 2015,
};

it(`AddReview is rendered correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      avatarUrl: `http//image.jpg`,
    },
  });

  const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <AddReview
            avatarImage={`image`}
            error={``}
            film={film}
            history={history}
            isDisabled={false}
            score={4}
            text={``}
            validationMessage={``}
            onSubmit={() => null}
            onDisable={() => null}
            onRatingChange={() => null}
            onTextChange={() => null}
            onValidForm={() => null}
          />
        </Provider>
      </BrowserRouter>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
