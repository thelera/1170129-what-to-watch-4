import * as React from "react";
import renderer from "react-test-renderer";
import withForm from "./with-form";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withForm(MockComponent);

it(`withForm is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      isDisabled={true}
      isValid={true}
      score={5}
      text={`text`}
      onDisable={() => {}}
      onRatingChange={() => {}}
      onTextChange={() => {}}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
