import {BrowserRouter} from "react-router-dom";
import {PrivateRoute} from "./private-route.jsx";
import React from "react";
import renderer from "react-test-renderer";

const film = {
  backgroundColor: `#444444`,
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  director: `David Yates`,
  genre: `Fantasy`,
  id: 3523525245235,
  isFavourite: true,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  ratingScore: 7.2,
  ratingCount: 248,
  runTime: 223,
  starring: [`Eddie Redmayne`, `Katherine Waterson`, `Dan Folger`],
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  year: 2015,
};

it(`PrivateRoute is rendered correctly`, () => {
  const tree = renderer.create(
    <BrowserRouter>
      <PrivateRoute
        authorizationStatus={`AUTH`}
        exact={`exact`}
        path={`path`}
        render={() => {}}
      />
    </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
