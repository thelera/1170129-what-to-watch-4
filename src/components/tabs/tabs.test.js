import React from "react";
import renderer from "react-test-renderer";
import Tab from "./tabs.jsx";
import {FilmDetailsTab} from "../../utils/consts.js";

const children = <div className="children-component" />;

it(`Tab is rendered correctly`, () => {
  const tree = renderer.create(
      <Tab
        tab={FilmDetailsTab.DETAILS}
        onTabClick={() => {}}
      >
        {children}
      </Tab>
      , {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
