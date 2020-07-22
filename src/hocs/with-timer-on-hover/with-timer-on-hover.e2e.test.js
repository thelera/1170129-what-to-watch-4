import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withTimerOnHover from "./with-timer-on-hover.js";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withTimerOnHover(MockComponent);

describe(`withTimerOnHover works correctly`, () => {
  it(`Should stops playing`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          isPlaying={true}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        />
    );

    wrapper.props().onMouseLeave();
    expect(wrapper.props().isPlaying).toEqual(false);
  });
});

