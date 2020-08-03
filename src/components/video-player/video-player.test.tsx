import * as React from "react";
import * as renderer from "react-test-renderer";
import {createMemoryHistory} from 'history';
import VideoPlayer from "./video-player";

const history = createMemoryHistory();

const Video = {
  WIDTH: 300,
  HEIGHT: 100,
  INTERVAL_IN_SEC: 1500,
  IS_MUTED: false,
};

it(`VideoPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <VideoPlayer
        duration={255}
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
      </VideoPlayer>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
