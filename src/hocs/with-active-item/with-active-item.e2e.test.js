import * as React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item";

configure({adapter: new Adapter()});

const MockComponent = () => <ul />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should give active item`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        activeItem={`active item`}
        onActiveClick={() => {}}
      />
  );

  wrapper.props().onActiveClick(`new item`);
  expect(wrapper.props().activeItem).toEqual(`new item`);
});
