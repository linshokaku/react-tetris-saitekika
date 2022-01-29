export const DEVELOPMENT_MODE = false;

export const GAME_WIDTH = 1092;
export const GAME_HEIGHT = 720;

export const TETRIS_MATRIX_VISIBLE_HEIGHT = 22;
export const TETRIS_MATRIX_VISIBLE_WIDTH = 10;
export const TETRIS_MATRIX_HEIGHT = 42;
export const TETRIS_MATRIX_BASE = 20;
export const TETRIS_MATRIX_WIDTH = 14;

export const TETRIS_VISIBLE_LEFT = DEVELOPMENT_MODE ? 0 : 2;
export const TETRIS_VISIBLE_RIGHT = DEVELOPMENT_MODE ? 14 : 12;
export const TETRIS_VISIBLE_TOP = DEVELOPMENT_MODE ? 20 : 18;
export const TETRIS_VISIBLE_BOTTOM =
  TETRIS_VISIBLE_TOP + TETRIS_MATRIX_VISIBLE_HEIGHT;

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

export const MATRIX_EMPTY = 'E';
export const MATRIX_WALL = 'W';
export const MATRIX_O = 'O';
export const MATRIX_I = 'I';
export const MATRIX_T = 'T';
export const MATRIX_L = 'L';
export const MATRIX_J = 'J';
export const MATRIX_S = 'S';
export const MATRIX_Z = 'Z';

export const GHOST_EMPTY = '.';
export const GHOST_EXIST = '#';

export const TARGET_EMPTY = '-';
export const TARGET_EXIST = '+';
