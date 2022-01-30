import shuffle from './common/shuffle';
import {
  BagType,
  GHOST_EMPTY,
  MATRIX_EMPTY,
  MATRIX_WALL,
  MINO_I,
  MINO_J,
  MINO_L,
  MINO_O,
  MINO_S,
  MINO_T,
  MINO_Z,
  ORIENTATION_NORTH,
  STARTING_WINDOW,
  TARGET_EMPTY,
  TETRIS_MATRIX_HEIGHT,
  TETRIS_MATRIX_WIDTH,
  TETRIS_WALL_SIZE,
  WindowType,
} from './constants';

type StateType = { mino: string; orientation: string };

class TetrisCore {
  ghost: Array<Array<string>>;

  target: Array<Array<string>>;

  fallingMatrix: Array<Array<string>>;

  lockMatrix: Array<Array<string>>;

  window: WindowType | null = null;

  state: StateType | null = null;

  bag: BagType = {
    minos: [MINO_O, MINO_I, MINO_T, MINO_L, MINO_J, MINO_S, MINO_Z],
    index: 0,
  };

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

    this.fallingMatrix = new Array<Array<string>>(TETRIS_MATRIX_HEIGHT);
    for (let i = 0; i < TETRIS_MATRIX_HEIGHT; i += 1) {
      this.fallingMatrix[i] = new Array<string>(TETRIS_MATRIX_WIDTH);
      for (let j = 0; j < TETRIS_MATRIX_WIDTH; j += 1) {
        this.fallingMatrix[i][j] = MATRIX_EMPTY;
      }
    }

    this.lockMatrix = new Array<Array<string>>(TETRIS_MATRIX_HEIGHT);
    for (let i = 0; i < TETRIS_MATRIX_HEIGHT - TETRIS_WALL_SIZE; i += 1) {
      this.lockMatrix[i] = new Array<string>(TETRIS_MATRIX_WIDTH);
      for (let j = 0; j < TETRIS_WALL_SIZE; j += 1) {
        this.lockMatrix[i][j] = MATRIX_WALL;
      }
      for (
        let j = TETRIS_WALL_SIZE;
        j < TETRIS_MATRIX_WIDTH - TETRIS_WALL_SIZE;
        j += 1
      ) {
        this.lockMatrix[i][j] = MATRIX_EMPTY;
      }
      for (
        let j = TETRIS_MATRIX_WIDTH - TETRIS_WALL_SIZE;
        j < TETRIS_MATRIX_WIDTH;
        j += 1
      ) {
        this.lockMatrix[i][j] = MATRIX_WALL;
      }
    }
    for (
      let i = TETRIS_MATRIX_HEIGHT - TETRIS_WALL_SIZE;
      i < TETRIS_MATRIX_HEIGHT;
      i += 1
    ) {
      this.lockMatrix[i] = new Array<string>(TETRIS_MATRIX_WIDTH);
      for (let j = 0; j < TETRIS_MATRIX_WIDTH; j += 1) {
        this.lockMatrix[i][j] = MATRIX_WALL;
      }
    }
    shuffle(this.bag.minos);
  }

  get matrix(): Array<Array<string>> {
    const matrix = new Array<Array<string>>(TETRIS_MATRIX_HEIGHT);
    for (let i = 0; i < TETRIS_MATRIX_HEIGHT; i += 1) {
      matrix[i] = new Array<string>(TETRIS_MATRIX_WIDTH);
      for (let j = 0; j < TETRIS_MATRIX_WIDTH; j += 1) {
        matrix[i][j] =
          this.fallingMatrix[i][j] === MATRIX_EMPTY
            ? this.lockMatrix[i][j]
            : this.fallingMatrix[i][j];
      }
    }
    return matrix;
  }

  generationPhase(): void {
    const mino = this.bag.minos[this.bag.index];
    this.bag.index += 1;
    if (this.bag.index >= 7) {
      this.bag.index = 0;
      shuffle(this.bag.minos);
    }

    this.window = STARTING_WINDOW[mino];
    this.state = { mino, orientation: ORIENTATION_NORTH };
    for (
      let { x } = this.window;
      x < this.window.x + this.window.width;
      x += 1
    ) {
      for (
        let { y } = this.window;
        y < this.window.y + this.window.height;
        y += 1
      ) {
        this.fallingMatrix[y][x] = mino;
      }
    }
  }
}

export default TetrisCore;
