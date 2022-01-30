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
  MINO_SHAPE,
  MINO_T,
  MINO_Z,
  ORIENTATION_NORTH,
  STARTING_WINDOW,
  TARGET_EMPTY,
  TETRIMINO_TRANSITION_CANDIDATE,
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
    if (this.bag.index === 0) {
      shuffle(this.bag.minos);
    }
    const mino = this.bag.minos[this.bag.index];
    this.bag.index += 1;
    if (this.bag.index >= 7) {
      this.bag.index = 0;
    }

    this.window = STARTING_WINDOW[mino];
    this.state = { mino, orientation: ORIENTATION_NORTH };
    this.drawFallingMatrix();
  }

  checkNoCollision(shape: Array<Array<boolean>>): boolean {
    if (!this.window) {
      return false;
    }
    for (
      let { x } = this.window, i = 0;
      x < this.window.x + this.window.width;
      x += 1, i += 1
    ) {
      for (
        let { y } = this.window, j = 0;
        y < this.window.y + this.window.height;
        y += 1, j += 1
      ) {
        if (shape[j][i] && this.lockMatrix[y][x] !== MATRIX_EMPTY) {
          return false;
        }
      }
    }
    return true;
  }

  clearFallingMatrix(): void {
    if (!this.window) {
      return;
    }
    for (
      let { x } = this.window, i = 0;
      x < this.window.x + this.window.width;
      x += 1, i += 1
    ) {
      for (
        let { y } = this.window, j = 0;
        y < this.window.y + this.window.height;
        y += 1, j += 1
      ) {
        this.fallingMatrix[y][x] = MATRIX_EMPTY;
      }
    }
  }

  drawFallingMatrix(): void {
    if (!this.state || !this.window) {
      return;
    }
    const shape = MINO_SHAPE[this.state.mino][this.state.orientation];

    for (
      let { x } = this.window, i = 0;
      x < this.window.x + this.window.width;
      x += 1, i += 1
    ) {
      for (
        let { y } = this.window, j = 0;
        y < this.window.y + this.window.height;
        y += 1, j += 1
      ) {
        this.fallingMatrix[y][x] = shape[j][i] ? this.state.mino : MATRIX_EMPTY;
      }
    }
  }

  transition(move: string): void {
    if (!this.state || !this.window) {
      return;
    }
    const { mino, orientation } = this.state;
    const candidate = TETRIMINO_TRANSITION_CANDIDATE[mino][orientation][move];
    for (let i = 0; i < candidate.length; i += 1) {
      if (this.checkNoCollision(candidate[i].shape)) {
        this.clearFallingMatrix();
        this.state.orientation = candidate[i].orientation;
        this.window.x += candidate[i].dx;
        this.window.y += candidate[i].dy;
        this.drawFallingMatrix();
        return;
      }
    }
  }
}

export default TetrisCore;
