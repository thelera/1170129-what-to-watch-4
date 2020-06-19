import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

const film = {
  title: `Bekket`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

Enzyme.configure({
  adapter: new Adapter()
});

it(`Film's index'll pass to handler if user hovers to film's card`, () => {
  const onHover = jest.fn((index) => index);
  const cardIndex = Math.random(7);

  const filmCard = shallow(
      <FilmCard
        image={film.image}
        title={film.title}
        index={cardIndex}
        onClick={() => {}}
        onHover={onHover}
      />
  );

  filmCard.simulate(`mouseover`, () => {});

  expect(onHover).toHaveBeenCalledTimes(1);
  expect(onHover.mock.results[0].value).toBe(cardIndex);
});
