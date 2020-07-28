import * as React from "react";
import renderer from "react-test-renderer";
import withActiveItem from "./with-active-item";

const MockComponent = () => {
  return (
    <ul>
    </ul>
  );
};

const MockComponentWrapped = withActiveItem(MockComponent);

it(`withActiveItem is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      activeItem={`active item`}
      onActiveClick={() => {}}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
