import {
  MATRIX_EMPTY,
  TETRIS_MATRIX_HEIGHT,
  TETRIS_MATRIX_WIDTH,
  TETRIS_VISIBLE_BOTTOM,
  TETRIS_VISIBLE_LEFT,
  TETRIS_VISIBLE_RIGHT,
  TETRIS_VISIBLE_TOP,
} from './constants';
import TetrisCore from './tetris';

test('create tetris core', () => {
  const tetris = new TetrisCore();
  expect(tetris.matrix.length).toBe(TETRIS_MATRIX_HEIGHT);
  for (let i = TETRIS_VISIBLE_TOP; i < TETRIS_VISIBLE_BOTTOM; i += 1) {
    expect(tetris.matrix[i].length).toBe(TETRIS_MATRIX_WIDTH);
    for (let j = TETRIS_VISIBLE_LEFT; j < TETRIS_VISIBLE_RIGHT; j += 1) {
      expect(tetris.matrix[i][j]).toBe(MATRIX_EMPTY);
    }
  }
});
