import { Stage } from '@inlet/react-pixi';
import { VFC } from 'react';
import { GAME_HEIGHT, GAME_WIDTH } from './constants';
import Main from './main';

const GameApp: VFC = () => {
  const main = Main();

  return (
    <Stage
      width={GAME_WIDTH}
      height={GAME_HEIGHT}
      options={{ backgroundColor: 0xeef1f5 }}
      renderOnComponentChange
      raf={false}
    >
      {main}
    </Stage>
  );
};

export default GameApp;
