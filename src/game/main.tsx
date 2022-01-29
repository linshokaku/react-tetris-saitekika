import { Container, Graphics } from '@inlet/react-pixi';
import { useEffect, useRef, useState } from 'react';
import { Rectangle } from './common/rectangle';
import { GAME_WIDTH, GAME_HEIGHT, BACKGROUND_COLOR } from './constants';
import { matrixBlock } from './materials';
import TetrisCore from './tetris';

const Main = (): React.ReactElement => {
  const tetrisCore = useRef<TetrisCore | undefined>(undefined);

  const [tetrisMatrix, setTetrisMatrix] = useState<
    Array<Array<string>> | undefined
  >(undefined);

  useEffect(() => {
    tetrisCore.current = new TetrisCore();
    setTetrisMatrix(tetrisCore.current.matrix);
  }, []);

  const matrixComponent =
    tetrisMatrix !== undefined
      ? tetrisMatrix.map((tetrisRow: Array<string>, i: number) =>
          tetrisRow.map((value: string, j: number) => matrixBlock(i, j, value))
        )
      : null;

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
      {matrixComponent}
    </Container>
  );
};

export default Main;
