import sum from '../index'

test('sum func', () => {
  expect(sum(2, 3, 4, 5)).toBe(14);

  expect(sum(5, 4, 3, 2)).toBe(14);
});
