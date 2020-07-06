import Adapter from "enzyme-adapter-react-16";
import Enzyme, {shallow} from "enzyme";
import {Main} from "./main.jsx";
import React from "react";

const filmData = {
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genres: [`Horror`],
  title: `No Country for Old Men`,
  year: 2005,
};

const films = [
  {
    title: `Bekket`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `The Doom Generation`,
    image: `img/bohemian-rhapsody.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Patrool`,
    image: `img/macbeth.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
];

Enzyme.configure({
  adapter: new Adapter()
});

it(`Card title should be clicked`, () => {
  const onClick = jest.fn();

  const main = shallow(
      <Main
        filmsList={films}
        promoFilm={filmData}
      />
  );

  const cardLink = main.find(`a.small-movie-card__link`);

  cardLink.forEach((link) => {
    link.simulate(`click`);
  });

  expect(onClick.mock.calls.length).toBe(cardLink.length);
});
