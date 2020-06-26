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
  const cardIndex = Math.round(Math.random(7));

  const filmCard = shallow(
      <FilmCard
        film={film}
        index={cardIndex}
        onClick={() => {}}
        onHover={onHover}
      />
  );

  const cardImage = filmCard.find(`.small-movie-card__image`);

  cardImage.simulate(`mouseenter`, () => {});

  expect(onHover).toHaveBeenCalledTimes(1);
  expect(onHover.mock.results[0].value).toBe(cardIndex);
});

it(`Film's detailed card opens if user clicks to film's image`, () => {
  const onClick = jest.fn((index) => index);
  const cardIndex = Math.round(Math.random(7));

  const filmCard = shallow(
      <FilmCard
        film={film}
        index={cardIndex}
        onClick={onClick}
        onHover={() => {}}
      />
  );

  const cardImage = filmCard.find(`.small-movie-card__image`);

  cardImage.simulate(`click`);

  expect(onClick).toHaveBeenCalledTimes(1);
  expect(onClick.mock.results[0].value).toBe(cardIndex);
});

it(`Film's detailed card opens if user clicks to film's title`, () => {
  const onClick = jest.fn((index) => index);
  const cardIndex = Math.round(Math.random(7));

  const filmCard = shallow(
      <FilmCard
        film={film}
        index={cardIndex}
        onClick={onClick}
        onHover={() => {}}
      />
  );

  const cardTitle = filmCard.find(`.small-movie-card__title`);

  cardTitle.simulate(`click`);

  expect(onClick).toHaveBeenCalledTimes(1);
  expect(onClick.mock.results[0].value).toBe(cardIndex);
});
