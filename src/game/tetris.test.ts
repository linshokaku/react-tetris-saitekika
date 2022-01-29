import { MATRIX_EMPTY } from './constants';
import TetrisCore from './tetris';

test('create tetris core', () => {
  const tetris = new TetrisCore();
  expect(tetris.matrix.length).toBe(20);
  for (let i = 0; i < 20; i += 1) {
    expect(tetris.matrix[i].length).toBe(10);
    for (let j = 0; j < 10; j += 1) {
      expect(tetris.matrix[i][j]).toBe(MATRIX_EMPTY);
    }
  }
});
