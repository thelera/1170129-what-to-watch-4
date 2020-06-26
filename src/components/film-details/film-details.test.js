import FilmDetails from "./film-details.jsx";
import React from "react";
import renderer from "react-test-renderer";

const film = {
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  description: [
    `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  ],
  director: [`David Yates`],
  genres: [`Fantasy`, `Kid's and Family`, `Adventure`],
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  ratingScore: 7.2,
  ratingLevel: `good`,
  ratingCount: 248,
  runTime: `1h 25m`,
  starring: [`Eddie Redmayne`, `Katherine Waterson`, `Dan Folger`],
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  year: 2015,
};

it(`FilmDetails is rendered correctly`, () => {
  const tree = renderer.create(
      <FilmDetails
        film={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
