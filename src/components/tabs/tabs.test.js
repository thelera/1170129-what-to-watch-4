import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import Tab from "./tabs.jsx";
import {FilmDetailsTab} from "../../utils/consts.js";

const children = <div className="children-component" />;

it(`Tab is rendered correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Tab
          id={5}
          tab={FilmDetailsTab.DETAILS}
          onTabClick={() => {}}
        >
          {children}
        </Tab>
      </BrowserRouter>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
