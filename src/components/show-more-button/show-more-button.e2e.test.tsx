import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {shallow} from "enzyme";
import {ShowMoreButton} from "./show-more-button";

Enzyme.configure({
  adapter: new Adapter()
});


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
