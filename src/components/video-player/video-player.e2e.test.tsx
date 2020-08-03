import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import {configure, mount} from "enzyme";
import {createMemoryHistory} from 'history';
import VideoPlayer from "./video-player";

const history = createMemoryHistory();

const Video = {
  WIDTH: 300,
  HEIGHT: 100,
  INTERVAL_IN_SEC: 1500,
  IS_MUTED: false,
};

configure({
  adapter: new Adapter()
});

it(`Video player can be playing or paused`, () => {
  let isVideoPlaying = false;

  let videoPlayer = mount(
      <VideoPlayer
        duration={222}
        history={history}
        isControled={true}
        isMuted={Video.IS_MUTED}
        isPlaying={false}
        width={Video.WIDTH}
        height={Video.HEIGHT}
        progress={10}
        onFullScreenButtonClick={() => null}
        onPlayButtonClick={() => null}
      >
        <video/>
      </VideoPlayer>
  );

  expect(videoPlayer.props().isPlaying).toBe(isVideoPlaying);

  isVideoPlaying = true;

  videoPlayer = mount(
      <VideoPlayer
        duration={222}
        history={history}
        isControled={true}
        isMuted={Video.IS_MUTED}
        isPlaying={true}
        width={Video.WIDTH}
        height={Video.HEIGHT}
        progress={10}
        onFullScreenButtonClick={() => null}
        onPlayButtonClick={() => null}
      >
        <video/>
      </VideoPlayer>
  );

  expect(videoPlayer.props().isPlaying).toBe(isVideoPlaying);

  videoPlayer.unmount();
});
