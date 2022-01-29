export const GAME_WIDTH = 1092;
export const GAME_HEIGHT = 720;

export const MATRIX_HEIGHT = 580;
export const MATRIX_WIDTH = MATRIX_HEIGHT * 0.5;
export const MATRIX_LOCATION_X = (GAME_WIDTH - MATRIX_WIDTH) / 2;
export const MATRIX_LOCATION_Y = (GAME_HEIGHT - MATRIX_HEIGHT) / 2;
export const BLOCK_SIZE = MATRIX_HEIGHT / 20;
export const MATRIX_ELEMENT_KEYS: Array<Array<string>> = new Array<
  Array<string>
>(20);
for (let i = 0; i < 20; i += 1) {
  MATRIX_ELEMENT_KEYS[i] = new Array<string>(10);
  for (let j = 0; j < 10; j += 1) {
    MATRIX_ELEMENT_KEYS[i][j] = `matrix_element_${i}_${j}`;
  }
}

export const BACKGROUND_COLOR = 0xbabbbd;
export const MATRIX_BORDER_COLOR = 0x69696e;
export const EMPTY_MATRIX_COLOR = 0xffffff;
export const O_MATRIX_COLOR = 0xffc72f;
export const I_MATRIX_COLOR = 0x00b0f0;
export const T_MATRIX_COLOR = 0x7c258b;
export const L_MATRIX_COLOR = 0xff892a;
export const J_MATRIX_COLOR = 0x0071bf;
export const S_MATRIX_COLOR = 0x6abc3e;
export const Z_MATRIX_COLOR = 0xff3117;

export const MATRIX_EMPTY = 'E';
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
