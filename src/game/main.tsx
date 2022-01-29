import { Container, Text, Graphics } from '@inlet/react-pixi';
import Rectangle from './common/rectangle';
import { GAME_WIDTH, GAME_HEIGHT, BACKGROUND_COLOR } from './constants';
import TetrisCore from './tetris';

const Main = (): React.ReactElement => {
  const tetris = new TetrisCore();
  const background = (
    <Graphics
      draw={Rectangle({
        color: BACKGROUND_COLOR,
        x: 0,
        y: 0,
        width: GAME_WIDTH,
        height: GAME_HEIGHT,
      })}
    />
  );
  return (
    <Container x={0} y={0} width={GAME_WIDTH} height={GAME_HEIGHT} interactive>
      {background}
      <Text text="Main" x={0} y={0} />
    </Container>
  );
};

export default Main;
