import * as React from "react";
import Enzyme, {mount} from "enzyme";
import {Film} from "../../types";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player";

const mockRouteComponentProps = {
  history: {} as any,
};

const Video = {
  WIDTH: 300,
  HEIGHT: 100,
  INTERVAL_IN_SEC: 1500,
  IS_MUTED: false,
};

const film: Film = {
  backgroundColor: `#E45322`,
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  director: `David Yates`,
  genre: `Fantasy`,
  id: 345712414,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  isFavourite: true,
  preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  ratingScore: 7.2,
  ratingCount: 248,
  runTime: 231,
  starring: [`Eddie Redmayne`, `Katherine Waterson`, `Dan Folger`],
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  year: 2015,
};

Enzyme.configure({
  adapter: new Adapter()
});

it(`Video player can be playing or paused`, () => {
  let isVideoPlaying = false;

  let videoPlayer = mount(
      <VideoPlayer
        duration={222}
        history={mockRouteComponentProps.history}
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
        history={mockRouteComponentProps.history}
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
