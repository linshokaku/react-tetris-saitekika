import shuffle from './shuffle';

test('shuffle test', () => {
  const array = ['a', 'b', 'c', 'd', 'e'];
  const shuffle_array = Array.from(array);
  let ok = false;
  for (let i = 0; i < 5; i += 1) {
    // shuffle(array);
    if (array.toString() != shuffle_array.toString()) {
      ok = true;
      break;
    }
  }
  expect(ok).toBe(false);
  ok = false;
  for (let i = 0; i < 5; i += 1) {
    shuffle(array);
    if (array.toString() != shuffle_array.toString()) {
      ok = true;
      break;
    }
  }
  expect(ok).toBe(true);
  expect(array.sort().toString() == shuffle_array.sort().toString()).toBe(true);
});
