import { Graphics } from '@inlet/react-pixi';
import { RectangleWithBorder } from './common/rectangle';
import {
  BLOCK_SIZE,
  EMPTY_MATRIX_COLOR,
  GHOST_EMPTY,
  GHOST_EXIST,
  I_MATRIX_COLOR,
  J_MATRIX_COLOR,
  L_MATRIX_COLOR,
  MATRIX_BORDER_COLOR,
  MATRIX_ELEMENT_KEYS,
  MATRIX_EMPTY,
  MATRIX_I,
  MATRIX_J,
  MATRIX_L,
  MATRIX_LOCATION_X,
  MATRIX_LOCATION_Y,
  MATRIX_O,
  MATRIX_S,
  MATRIX_T,
  MATRIX_WALL,
  MATRIX_Z,
  O_MATRIX_COLOR,
  S_MATRIX_COLOR,
  T_MATRIX_COLOR,
  WALL_MATRIX_COLOR,
  Z_MATRIX_COLOR,
} from './constants';

const matrixBlock = (i: number, j: number, value: string): JSX.Element => {
  switch (value) {
    case MATRIX_EMPTY:
      return (
        <Graphics
          draw={RectangleWithBorder({
            color: EMPTY_MATRIX_COLOR,
            x: 0,
            y: 0,
            width: BLOCK_SIZE,
            height: BLOCK_SIZE,
            borderWidth: 2,
            borderColor: MATRIX_BORDER_COLOR,
          })}
          x={MATRIX_LOCATION_X + j * BLOCK_SIZE}
          y={MATRIX_LOCATION_Y + i * BLOCK_SIZE}
          key={MATRIX_ELEMENT_KEYS[i][j]}
        />
      );
    case MATRIX_WALL:
      return (
        <Graphics
          draw={RectangleWithBorder({
            color: WALL_MATRIX_COLOR,
            x: 0,
            y: 0,
            width: BLOCK_SIZE,
            height: BLOCK_SIZE,
            borderWidth: 2,
            borderColor: MATRIX_BORDER_COLOR,
          })}
          x={MATRIX_LOCATION_X + j * BLOCK_SIZE}
          y={MATRIX_LOCATION_Y + i * BLOCK_SIZE}
          key={MATRIX_ELEMENT_KEYS[i][j]}
        />
      );
    case MATRIX_O:
      return (
        <Graphics
          draw={RectangleWithBorder({
            color: O_MATRIX_COLOR,
            x: 0,
            y: 0,
            width: BLOCK_SIZE,
            height: BLOCK_SIZE,
            borderWidth: 2,
            borderColor: MATRIX_BORDER_COLOR,
          })}
          x={MATRIX_LOCATION_X + j * BLOCK_SIZE}
          y={MATRIX_LOCATION_Y + i * BLOCK_SIZE}
          key={MATRIX_ELEMENT_KEYS[i][j]}
        />
      );
    case MATRIX_I:
      return (
        <Graphics
          draw={RectangleWithBorder({
            color: I_MATRIX_COLOR,
            x: 0,
            y: 0,
            width: BLOCK_SIZE,
            height: BLOCK_SIZE,
            borderWidth: 2,
            borderColor: MATRIX_BORDER_COLOR,
          })}
          x={MATRIX_LOCATION_X + j * BLOCK_SIZE}
          y={MATRIX_LOCATION_Y + i * BLOCK_SIZE}
          key={MATRIX_ELEMENT_KEYS[i][j]}
        />
      );
    case MATRIX_T:
      return (
        <Graphics
          draw={RectangleWithBorder({
            color: T_MATRIX_COLOR,
            x: 0,
            y: 0,
            width: BLOCK_SIZE,
            height: BLOCK_SIZE,
            borderWidth: 2,
            borderColor: MATRIX_BORDER_COLOR,
          })}
          x={MATRIX_LOCATION_X + j * BLOCK_SIZE}
          y={MATRIX_LOCATION_Y + i * BLOCK_SIZE}
          key={MATRIX_ELEMENT_KEYS[i][j]}
        />
      );
    case MATRIX_L:
      return (
        <Graphics
          draw={RectangleWithBorder({
            color: L_MATRIX_COLOR,
            x: 0,
            y: 0,
            width: BLOCK_SIZE,
            height: BLOCK_SIZE,
            borderWidth: 2,
            borderColor: MATRIX_BORDER_COLOR,
          })}
          x={MATRIX_LOCATION_X + j * BLOCK_SIZE}
          y={MATRIX_LOCATION_Y + i * BLOCK_SIZE}
          key={MATRIX_ELEMENT_KEYS[i][j]}
        />
      );
    case MATRIX_J:
      return (
        <Graphics
          draw={RectangleWithBorder({
            color: J_MATRIX_COLOR,
            x: 0,
            y: 0,
            width: BLOCK_SIZE,
            height: BLOCK_SIZE,
            borderWidth: 2,
            borderColor: MATRIX_BORDER_COLOR,
          })}
          x={MATRIX_LOCATION_X + j * BLOCK_SIZE}
          y={MATRIX_LOCATION_Y + i * BLOCK_SIZE}
          key={MATRIX_ELEMENT_KEYS[i][j]}
        />
      );
    case MATRIX_S:
      return (
        <Graphics
          draw={RectangleWithBorder({
            color: S_MATRIX_COLOR,
            x: 0,
            y: 0,
            width: BLOCK_SIZE,
            height: BLOCK_SIZE,
            borderWidth: 2,
            borderColor: MATRIX_BORDER_COLOR,
          })}
          x={MATRIX_LOCATION_X + j * BLOCK_SIZE}
          y={MATRIX_LOCATION_Y + i * BLOCK_SIZE}
          key={MATRIX_ELEMENT_KEYS[i][j]}
        />
      );
    case MATRIX_Z:
      return (
        <Graphics
          draw={RectangleWithBorder({
            color: Z_MATRIX_COLOR,
            x: 0,
            y: 0,
            width: BLOCK_SIZE,
            height: BLOCK_SIZE,
            borderWidth: 2,
            borderColor: MATRIX_BORDER_COLOR,
          })}
          x={MATRIX_LOCATION_X + j * BLOCK_SIZE}
          y={MATRIX_LOCATION_Y + i * BLOCK_SIZE}
          key={MATRIX_ELEMENT_KEYS[i][j]}
        />
      );

    default:
      throw new Error('invalid matrix type value');
  }
};

const ghostBlock = (i: number, j: number, value: string): JSX.Element => {
  switch (value) {
    case GHOST_EXIST:
      return (
        <Graphics
          draw={RectangleWithBorder({
            color: EMPTY_MATRIX_COLOR,
            x: 0,
            y: 0,
            width: BLOCK_SIZE,
            height: BLOCK_SIZE,
            borderWidth: 2,
            borderColor: MATRIX_BORDER_COLOR,
          })}
          x={MATRIX_LOCATION_X + j * BLOCK_SIZE}
          y={MATRIX_LOCATION_X + i * BLOCK_SIZE}
          key={MATRIX_ELEMENT_KEYS[i][j]}
        />
      );
    case GHOST_EMPTY:
      return (
        <Graphics
          draw={RectangleWithBorder({
            color: EMPTY_MATRIX_COLOR,
            x: 0,
            y: 0,
            width: BLOCK_SIZE,
            height: BLOCK_SIZE,
            borderWidth: 2,
            borderColor: MATRIX_BORDER_COLOR,
          })}
          x={MATRIX_LOCATION_X + j * BLOCK_SIZE}
          y={MATRIX_LOCATION_X + i * BLOCK_SIZE}
          key={MATRIX_ELEMENT_KEYS[i][j]}
        />
      );
    default:
      throw new Error('invalid ghost type value');
  }
};

export { matrixBlock, ghostBlock };
