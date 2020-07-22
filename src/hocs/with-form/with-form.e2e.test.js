import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withForm from "./with-form.js";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withForm(MockComponent);

describe(`withForm works correctly`, () => {
  it(`Should change rating`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          isDisabled={true}
          isValid={true}
          score={5}
          text={`text`}
          onDisable={() => {}}
          onRatingChange={() => {}}
          onTextChange={() => {}}
        />
    );
  
    wrapper.props().onRatingChange(10);
    expect(wrapper.props().score).toEqual(10);
  });

  it(`Should change text`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          isDisabled={true}
          isValid={true}
          score={5}
          text={`text`}
          onDisable={() => {}}
          onRatingChange={() => {}}
          onTextChange={() => {}}
        />
    );
  
    wrapper.props().onTextChange(`new text`);
    expect(wrapper.props().text).toEqual(`new text`);
  });

  it(`Should disable form`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          isDisabled={false}
          isValid={true}
          score={5}
          text={`text`}
          onDisable={() => {}}
          onRatingChange={() => {}}
          onTextChange={() => {}}
        />
    );
  
    wrapper.props().onDisable(true);
    expect(wrapper.props().isDisabled).toEqual(true);
  });
})

