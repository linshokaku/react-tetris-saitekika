export const DEVELOPMENT_MODE = false;

export const GAME_WIDTH = 1092;
export const GAME_HEIGHT = 720;

export const TETRIS_MATRIX_HEIGHT = 44;
export const TETRIS_MATRIX_BASE = 20;
export const TETRIS_MATRIX_WIDTH = 18;
export const TETRIS_MATRIX_OFFSET_X = 4;
export const TETRIS_MATRIX_OFFSET_Y = 20;
export const TETRIS_WALL_SIZE = 4;

export const TETRIS_VISIBLE_LEFT = DEVELOPMENT_MODE ? 0 : 4;
export const TETRIS_VISIBLE_RIGHT = DEVELOPMENT_MODE ? 18 : 14;
export const TETRIS_VISIBLE_TOP = DEVELOPMENT_MODE ? 18 : 18;
export const TETRIS_VISIBLE_BOTTOM = DEVELOPMENT_MODE ? 44 : 40;

export const TETRIS_MATRIX_VISIBLE_HEIGHT =
  TETRIS_VISIBLE_BOTTOM - TETRIS_VISIBLE_TOP;
export const TETRIS_MATRIX_VISIBLE_WIDTH =
  TETRIS_VISIBLE_RIGHT - TETRIS_VISIBLE_LEFT;

export const BLOCK_SIZE = 28;
export const MATRIX_HEIGHT = BLOCK_SIZE * TETRIS_MATRIX_VISIBLE_HEIGHT;
export const MATRIX_WIDTH = BLOCK_SIZE * TETRIS_MATRIX_VISIBLE_WIDTH;
export const MATRIX_LOCATION_X = (GAME_WIDTH - MATRIX_WIDTH) / 2;
export const MATRIX_LOCATION_Y = (GAME_HEIGHT - MATRIX_HEIGHT) / 2;

export const MATRIX_ELEMENT_KEYS: Array<Array<string>> = new Array<
  Array<string>
>(TETRIS_MATRIX_HEIGHT);
for (let i = 0; i < TETRIS_MATRIX_HEIGHT; i += 1) {
  MATRIX_ELEMENT_KEYS[i] = new Array<string>(TETRIS_MATRIX_WIDTH);
  for (let j = 0; j < TETRIS_MATRIX_WIDTH; j += 1) {
    MATRIX_ELEMENT_KEYS[i][j] = `matrix_element_${i}_${j}`;
  }
}

export const BACKGROUND_COLOR = 0xbabbbd;
export const MATRIX_BORDER_COLOR = 0x69696e;
export const EMPTY_MATRIX_COLOR = 0xffffff;
export const WALL_MATRIX_COLOR = 0x000000;
export const O_MATRIX_COLOR = 0xffc72f;
export const I_MATRIX_COLOR = 0x00b0f0;
export const T_MATRIX_COLOR = 0x7c258b;
export const L_MATRIX_COLOR = 0xff892a;
export const J_MATRIX_COLOR = 0x0071bf;
export const S_MATRIX_COLOR = 0x6abc3e;
export const Z_MATRIX_COLOR = 0xff3117;

export const MINO_O = 'O';
export const MINO_I = 'I';
export const MINO_T = 'T';
export const MINO_L = 'L';
export const MINO_J = 'J';
export const MINO_S = 'S';
export const MINO_Z = 'Z';

export const MATRIX_EMPTY = 'E';
export const MATRIX_WALL = 'W';
export const MATRIX_O = MINO_O;
export const MATRIX_I = MINO_I;
export const MATRIX_T = MINO_T;
export const MATRIX_L = MINO_L;
export const MATRIX_J = MINO_J;
export const MATRIX_S = MINO_S;
export const MATRIX_Z = MINO_Z;

export const GHOST_EMPTY = '.';
export const GHOST_EXIST = '#';

export const TARGET_EMPTY = '-';
export const TARGET_EXIST = '+';

export type WindowType = {
  x: number;
  y: number;
  width: number;
  height: number;
};
export type BagType = { minos: Array<string>; index: number };

export type StartingWindowType = {
  [name: string]: WindowType;
};

export const STARTING_WINDOW: StartingWindowType = {
  O: {
    x: 1 + TETRIS_MATRIX_OFFSET_X,
    y: -4 + TETRIS_MATRIX_OFFSET_Y,
    width: 7,
    height: 7,
  },
  I: {
    x: 1 + TETRIS_MATRIX_OFFSET_X,
    y: -4 + TETRIS_MATRIX_OFFSET_Y,
    width: 8,
    height: 8,
  },
  T: {
    x: 1 + TETRIS_MATRIX_OFFSET_X,
    y: -4 + TETRIS_MATRIX_OFFSET_Y,
    width: 7,
    height: 7,
  },
  L: {
    x: 1 + TETRIS_MATRIX_OFFSET_X,
    y: -4 + TETRIS_MATRIX_OFFSET_Y,
    width: 7,
    height: 7,
  },
  J: {
    x: 1 + TETRIS_MATRIX_OFFSET_X,
    y: -4 + TETRIS_MATRIX_OFFSET_Y,
    width: 7,
    height: 7,
  },
  S: {
    x: 1 + TETRIS_MATRIX_OFFSET_X,
    y: -4 + TETRIS_MATRIX_OFFSET_Y,
    width: 7,
    height: 7,
  },
  Z: {
    x: 1 + TETRIS_MATRIX_OFFSET_X,
    y: -4 + TETRIS_MATRIX_OFFSET_Y,
    width: 7,
    height: 7,
  },
};

export const ORIENTATION_NORTH = 'north';
export const ORIENTATION_EAST = 'east';
export const ORIENTATION_SOUTH = 'south';
export const ORIENTATION_WEST = 'west';

export type ShapeType = {
  [name: string]: Array<Array<boolean>>;
};
export type MinoShapeType = {
  [name: string]: ShapeType;
};
export const MINO_SHAPE: MinoShapeType = {
  O: {
    north: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, true, true, false, false],
      [false, false, false, true, true, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    east: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, true, true, false, false],
      [false, false, false, true, true, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    south: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, true, true, false, false],
      [false, false, false, true, true, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    west: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, true, true, false, false],
      [false, false, false, true, true, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
  },
  I: {
    north: [
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, true, true, true, true, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
    ],
    east: [
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, true, false, false, false],
      [false, false, false, false, true, false, false, false],
      [false, false, false, false, true, false, false, false],
      [false, false, false, false, true, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
    ],
    south: [
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, true, true, true, true, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
    ],
    west: [
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, true, false, false, false, false],
      [false, false, false, true, false, false, false, false],
      [false, false, false, true, false, false, false, false],
      [false, false, false, true, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
    ],
  },
  T: {
    north: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, true, true, true, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    east: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, true, true, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    south: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, true, true, true, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    west: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, true, true, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
  },
  L: {
    north: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, true, false, false],
      [false, false, true, true, true, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    east: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, true, true, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    south: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, true, true, true, false, false],
      [false, false, true, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    west: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, true, true, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
  },
  J: {
    north: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, true, false, false, false, false],
      [false, false, true, true, true, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    east: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, true, true, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    south: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, true, true, true, false, false],
      [false, false, false, false, true, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    west: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, true, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
  },
  S: {
    north: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, true, true, false, false],
      [false, false, true, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    east: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, true, true, false, false],
      [false, false, false, false, true, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    south: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, true, true, false, false],
      [false, false, true, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    west: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, true, false, false, false, false],
      [false, false, true, true, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
  },
  Z: {
    north: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, true, true, false, false, false],
      [false, false, false, true, true, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    east: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, true, false, false],
      [false, false, false, true, true, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    south: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, true, true, false, false, false],
      [false, false, false, true, true, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    west: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, true, true, false, false, false],
      [false, false, true, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
  },
};
