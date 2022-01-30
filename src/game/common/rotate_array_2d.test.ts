import rotate_array_2d from './rotate_array_2d';

test('rotate_array_2d test', () => {
  const array = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  expect(array.toString() === array.toString()).toBe(true);
  const x_rotated_array = rotate_array_2d(1, 0, array);
  expect(array.toString() === rotate_array_2d.toString()).toBe(false);
  const x_rerotated_array = rotate_array_2d(-1, 0, x_rotated_array);
  expect(x_rerotated_array.toString()).toBe(array.toString());
  const y_rotated_array = rotate_array_2d(0, 1, array);
  expect(array.toString() === rotate_array_2d.toString()).toBe(false);
  const y_rerotated_array = rotate_array_2d(0, -1, y_rotated_array);
  expect(y_rerotated_array.toString()).toBe(array.toString());
});
