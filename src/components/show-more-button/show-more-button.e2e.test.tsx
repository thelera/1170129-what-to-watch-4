import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import {configure, shallow} from "enzyme";
import {ShowMoreButton} from "./show-more-button";

configure({adapter: new Adapter()});

it(`Handler is loaded if user clicks to the button`, () => {
  const onClick = jest.fn();

  const button = shallow(
      <ShowMoreButton
        onClick={onClick}
      />
  );

  button.simulate(`click`, () => null);

  expect(onClick).toHaveBeenCalledTimes(1);
});
