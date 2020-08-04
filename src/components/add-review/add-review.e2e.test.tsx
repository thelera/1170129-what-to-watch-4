import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import {AddReview} from "./add-review";
import {configure, shallow} from "enzyme";
import {createMemoryHistory} from 'history';
import {Film} from "../../types";

configure({adapter: new Adapter()});

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

describe(`AddReview works correctly`, () => {
  it(`onSubmit handler is loaded if user clicks to submit button and form is valid`, () => {
    const text = `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`;

    const onSubmit = jest.fn(() => Promise.resolve());

    const addReview = shallow(
        <AddReview
          avatarImage={`image`}
          error={``}
          film={film}
          history={history}
          isDisabled={false}
          score={4}
          text={text}
          validationMessage={``}
          onSubmit={onSubmit}
          onDisable={() => null}
          onRatingChange={() => null}
          onTextChange={() => null}
          onValidForm={() => null}
        />
    );

    const form = addReview.find(`.add-review__form`);

    form.simulate(`submit`, {preventDefault: jest.fn()});

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it(`onValidForm handler isn't loaded if user clicks to submit button and form isn't valid (text is too short)`, () => {
    const text = ``;

    const onSubmit = jest.fn(() => Promise.resolve());
    const onValidForm = jest.fn(() => null);

    const addReview = shallow(
        <AddReview
          avatarImage={`image`}
          error={``}
          film={film}
          history={history}
          isDisabled={false}
          score={4}
          text={text}
          validationMessage={``}
          onSubmit={onSubmit}
          onDisable={() => null}
          onRatingChange={() => null}
          onTextChange={() => null}
          onValidForm={onValidForm}
        />
    );

    const form = addReview.find(`.add-review__form`);

    form.simulate(`submit`, {preventDefault: jest.fn()});

    expect(onSubmit).toHaveBeenCalledTimes(0);
    expect(onValidForm).toHaveBeenCalledTimes(1);
  });

  it(`onValidForm handler isn't loaded if user clicks to submit button and form isn't valid (score is zero)`, () => {
    const text = `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`;

    const onSubmit = jest.fn(() => Promise.resolve());
    const onValidForm = jest.fn(() => null);

    const addReview = shallow(
        <AddReview
          avatarImage={`image`}
          error={``}
          film={film}
          history={history}
          isDisabled={false}
          score={0}
          text={text}
          validationMessage={``}
          onSubmit={onSubmit}
          onDisable={() => null}
          onRatingChange={() => null}
          onTextChange={() => null}
          onValidForm={onValidForm}
        />
    );

    const form = addReview.find(`.add-review__form`);

    form.simulate(`submit`, {preventDefault: jest.fn()});

    expect(onSubmit).toHaveBeenCalledTimes(0);
    expect(onValidForm).toHaveBeenCalledTimes(1);
  });
});
