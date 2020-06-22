import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

const films = [
  {
    title: `Bekket`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    title: `The Doom Generation`,
    image: `img/bohemian-rhapsody.jpg`,
  },
  {
    title: `Patrool`,
    image: `img/macbeth.jpg`,
  },
];

Enzyme.configure({
  adapter: new Adapter()
});

it(`Card title should be clicked`, () => {
  const onClick = jest.fn();

  const main = shallow(
      <Main
        name={`Aviator`}
        genre={`Action`}
        year={2010}
        films={films}
        onClick={onClick}
      />
  );

  const cardLink = main.find(`a.small-movie-card__link`);

  cardLink.forEach((link) => {
    link.simulate(`click`);
  });

  expect(onClick.mock.calls.length).toBe(cardLink.length);
});
