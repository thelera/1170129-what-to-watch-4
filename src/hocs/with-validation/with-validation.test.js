import * as React from "react";
import renderer from "react-test-renderer";
import withValidation from "./with-validation";

const MockComponent = () => <article />;

const MockComponentWrapped = withValidation(MockComponent);

it(`withValidation is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      validationMessage={`message`}
      onValidForm={() => {}}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
