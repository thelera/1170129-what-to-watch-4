import VideoPlayer from "./video-player.jsx";
import React from "react";
import renderer from "react-test-renderer";

const Video = {
  WIDTH: 300,
  HEIGHT: 100,
  INTERVAL_IN_SEC: 1500,
  IS_MUTED: false,
};

const film = {
  preview: `https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

it(`VideoPlayer is rendered correctly`, () => {
  const {preview, image} = film;

  const tree = renderer.create(
      <VideoPlayer
        source={preview}
        poster={image}
        interval={Video.INTERVAL_IN_SEC}
        isMuted={Video.IS_MUTED}
        isPlaying={true}
        width={Video.WIDTH}
        height={Video.HEIGHT}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
