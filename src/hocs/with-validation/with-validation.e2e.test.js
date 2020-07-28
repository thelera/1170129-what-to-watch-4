import * as React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withValidation from "./with-validation";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withValidation(MockComponent);

it(`Should change message`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        validationMessage={`message`}
        onValidForm={() => {}}
      />
  );

  wrapper.props().onValidForm(`new message`);
  expect(wrapper.props().validationMessage).toEqual(`new message`);
});

