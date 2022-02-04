import { Container, Graphics, Stage } from '@inlet/react-pixi';
import { InteractionEvent } from 'pixi.js';
import { KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import { Rectangle } from './common/rectangle';
import {
  GAME_WIDTH,
  GAME_HEIGHT,
  BACKGROUND_COLOR,
  TETRIS_VISIBLE_TOP,
  TETRIS_VISIBLE_BOTTOM,
  TETRIS_VISIBLE_LEFT,
  TETRIS_VISIBLE_RIGHT,
  MOVE_LEFT,
  MOVE_RIGHT,
} from './constants';
import { matrixBlock } from './materials';
import TetrisCore from './tetris';
import './main.css';

const Main = (): React.ReactElement => {
  const tetrisCore = useRef<TetrisCore | undefined>(undefined);

  const leftKey = useRef<string>('ArrowLeft');
  const rightKey = useRef<string>('ArrowRight');

  const [tetrisMatrix, setTetrisMatrix] = useState<
    Array<Array<string>> | undefined
  >(undefined);

  useEffect(() => {
    tetrisCore.current = new TetrisCore();
    setTetrisMatrix(tetrisCore.current.matrix);
  }, []);

  const matrixComponent =
    tetrisMatrix !== undefined
      ? tetrisMatrix
          .slice(TETRIS_VISIBLE_TOP, TETRIS_VISIBLE_BOTTOM)
          .map((tetrisRow: Array<string>, i: number) =>
            tetrisRow
              .slice(TETRIS_VISIBLE_LEFT, TETRIS_VISIBLE_RIGHT)
              .map((value: string, j: number) => matrixBlock(i, j, value))
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

  // eslint-disable-next-line
  const handleMousedownEvent = async (_: InteractionEvent) => {
    if (!tetrisCore.current) {
      return;
    }
    tetrisCore.current.generationPhase();
    setTetrisMatrix(tetrisCore.current.matrix);
  };

  const handleKeyDownEvent: KeyboardEventHandler<HTMLCanvasElement> = (
    event
  ) => {
    if (event.repeat) return;

    if (!tetrisCore.current) {
      return;
    }

    switch (event.code) {
      case leftKey.current:
        tetrisCore.current.transition(MOVE_LEFT);
        setTetrisMatrix(tetrisCore.current.matrix);
        break;
      case rightKey.current:
        tetrisCore.current.transition(MOVE_RIGHT);
        setTetrisMatrix(tetrisCore.current.matrix);
        break;
      default:
    }
  };
  return (
    <Stage
      width={GAME_WIDTH}
      height={GAME_HEIGHT}
      options={{ backgroundColor: 0xeef1f5 }}
      renderOnComponentChange
      raf={false}
      onKeyDown={handleKeyDownEvent}
      tabIndex={-1}
    >
      <Container
        x={0}
        y={0}
        width={GAME_WIDTH}
        height={GAME_HEIGHT}
        interactive
        mousedown={handleMousedownEvent}
      >
        {background}
        {matrixComponent}
      </Container>
    </Stage>
  );
};

export default Main;
