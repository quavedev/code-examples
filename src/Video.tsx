import { Composition } from 'remotion';
import { MapAsync } from "./animations/meteor3/MapAsync";
import { getFrame } from "./utils/utils";
import './style.css';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="MapAsync"
        component={MapAsync}
        durationInFrames={getFrame(20)}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
