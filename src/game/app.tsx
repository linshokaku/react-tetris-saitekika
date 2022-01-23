import { Stage, Sprite } from '@inlet/react-pixi';
import { VFC } from 'react';

const GameApp: VFC = () => (
  <Stage width={1092} height={720}>
    <Sprite image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png" />
  </Stage>
);

export default GameApp;
