import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

const FILM_NAMES = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
];

Enzyme.configure({
  adapter: new Adapter()
});

it(`Card title should be clicked`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        name={`Aviator`}
        genre={`Action`}
        year={2010}
        filmNames={FILM_NAMES}
        onTitleClick={onTitleClick}
      />
  );

  const cardLink = main.find(`a.small-movie-card__link`);

  cardLink.forEach((link) => {
    link.simulate(`click`);
  });

  expect(onTitleClick.mock.calls.length).toBe(cardLink.length);
});
