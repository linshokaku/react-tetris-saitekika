import {
  GHOST_EMPTY,
  MATRIX_EMPTY,
  MATRIX_WALL,
  TARGET_EMPTY,
  TETRIS_MATRIX_HEIGHT,
  TETRIS_MATRIX_WIDTH,
} from './constants';

class TetrisCore {
  ghost: Array<Array<string>>;

  target: Array<Array<string>>;

  current: Array<Array<string>>;

  field: Array<Array<string>>;

  constructor() {
    this.ghost = new Array<Array<string>>(TETRIS_MATRIX_HEIGHT);
    for (let i = 0; i < TETRIS_MATRIX_HEIGHT; i += 1) {
      this.ghost[i] = new Array<string>(TETRIS_MATRIX_WIDTH);
      for (let j = 0; j < TETRIS_MATRIX_WIDTH; j += 1) {
        this.ghost[i][j] = GHOST_EMPTY;
      }
    }

    this.target = new Array<Array<string>>(TETRIS_MATRIX_HEIGHT);
    for (let i = 0; i < TETRIS_MATRIX_HEIGHT; i += 1) {
      this.target[i] = new Array<string>(TETRIS_MATRIX_WIDTH);
      for (let j = 0; j < TETRIS_MATRIX_WIDTH; j += 1) {
        this.target[i][j] = TARGET_EMPTY;
      }
    }

    this.current = new Array<Array<string>>(TETRIS_MATRIX_HEIGHT);
    for (let i = 0; i < TETRIS_MATRIX_HEIGHT; i += 1) {
      this.current[i] = new Array<string>(TETRIS_MATRIX_WIDTH);
      for (let j = 0; j < TETRIS_MATRIX_WIDTH; j += 1) {
        this.current[i][j] = MATRIX_EMPTY;
      }
    }

    this.field = new Array<Array<string>>(TETRIS_MATRIX_HEIGHT);
    for (let i = 0; i < TETRIS_MATRIX_HEIGHT - 2; i += 1) {
      this.field[i] = new Array<string>(TETRIS_MATRIX_WIDTH);
      for (let j = 0; j < 2; j += 1) {
        this.field[i][j] = MATRIX_WALL;
      }
      for (let j = 2; j < TETRIS_MATRIX_WIDTH - 2; j += 1) {
        this.field[i][j] = MATRIX_EMPTY;
      }
      for (let j = TETRIS_MATRIX_WIDTH - 2; j < TETRIS_MATRIX_WIDTH; j += 1) {
        this.field[i][j] = MATRIX_WALL;
      }
    }
    for (let i = TETRIS_MATRIX_HEIGHT - 2; i < TETRIS_MATRIX_HEIGHT; i += 1) {
      this.field[i] = new Array<string>(TETRIS_MATRIX_WIDTH);
      for (let j = 0; j < TETRIS_MATRIX_WIDTH; j += 1) {
        this.field[i][j] = MATRIX_WALL;
      }
    }
  }

  get matrix(): Array<Array<string>> {
    const matrix = new Array<Array<string>>(TETRIS_MATRIX_HEIGHT);
    for (let i = 0; i < TETRIS_MATRIX_HEIGHT; i += 1) {
      matrix[i] = new Array<string>(TETRIS_MATRIX_WIDTH);
      for (let j = 0; j < TETRIS_MATRIX_WIDTH; j += 1) {
        matrix[i][j] =
          this.current[i][j] === MATRIX_EMPTY
            ? this.field[i][j]
            : this.current[i][j];
      }
    }
    return matrix;
  }
}

export default TetrisCore;
