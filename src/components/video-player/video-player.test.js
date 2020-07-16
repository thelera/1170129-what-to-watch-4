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
  preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewVideoLink: `https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4`,
};

it(`VideoPlayer is rendered correctly`, () => {
  const {preview, previewVideoLink} = film;

  const tree = renderer.create(
      <VideoPlayer

        source={previewVideoLink}
        poster={preview}
        isMuted={Video.IS_MUTED}
        isPlaying={true}
        width={Video.WIDTH}
        height={Video.HEIGHT}
      >
        <video/>
      </VideoPlayer>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
