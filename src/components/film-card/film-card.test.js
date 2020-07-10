import {FilmCard} from "./film-card.jsx";
import React from "react";
import renderer from "react-test-renderer";

const film = {
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  description: [
    `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  ],
  director: [`David Yates`],
  genre: [`Fantasy`, `Kid's and Family`, `Adventure`, `Story`],
  id: String(new Date() + Math.random()),
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  ratingScore: 7.2,
  ratingLevel: `good`,
  ratingCount: 248,
  runTime: `1h 55m`,
  starring: [`Eddie Redmayne`, `Katherine Waterson`, `Dan Folger`],
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  year: 2015,
};

it(`FilmCard is rendered correctly`, () => {
  const tree = renderer.create(
      <FilmCard
        film={film}
        isPlaying={true}
        onClick={() => { }}
        onMouseEnter={() => { }}
        onMouseLeave={() => { }}
      />
      , {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
