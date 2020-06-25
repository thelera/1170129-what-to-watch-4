import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

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

Enzyme.configure({
  adapter: new Adapter()
});

it(`Video player can be playing or paused`, () => {
  const {image, preview} = film;
  const isVideoPlaying = false;

  const videoPlayer = mount(
      <VideoPlayer
        source={preview}
        poster={image}
        interval={Video.INTERVAL_IN_SEC}
        isMuted={Video.IS_MUTED}
        isPlaying={isVideoPlaying}
        width={Video.WIDTH}
        height={Video.HEIGHT}
      />
  );

  expect(videoPlayer.state().isPlaying).toBe(isVideoPlaying);
  expect(videoPlayer.state().isPlaying).toEqual(videoPlayer.props().isPlaying);

  videoPlayer.unmount();
});
