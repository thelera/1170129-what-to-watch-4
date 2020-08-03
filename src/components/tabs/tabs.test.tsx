import * as React from "react";
import {BrowserRouter} from "react-router-dom";
import * as renderer from "react-test-renderer";
import Tab from "./tabs";
import {FilmPageTab} from "../../types";

const children = <div className="children-component" />;

it(`Tab is rendered correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Tab
          tab={FilmPageTab.DETAILS}
          onTabClick={() => null}
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
