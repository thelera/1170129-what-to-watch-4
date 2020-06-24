import FilmList from "./film-list.jsx";
import React from "react";
import renderer from "react-test-renderer";

const films = [
  {
    image: `img/snatch.jpg`,
    preview: `https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4`,
    title: `Snatch`,
  },
  {
    image: `img/aviator.jpg`,
    poster: `ddd`,
    preview: `https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4`,
    title: `Aviator`,
  },
  {
    image: `img/avatar.jpg`,
    preview: `https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4`,
    title: `Avatar`,
  }
];

it(`FilmList is rendered correctly`, () => {
  const tree = renderer.create(
      <FilmList
        films={films}
        onClick={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
