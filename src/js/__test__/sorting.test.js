import orderByProps from '../sorting';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('The order of the elements in the array must be correct', () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, ['name', 'level']))
    .toEqual(expected);
});

test('The function will return the correct result if the 2nd argument is not passed', () => {
  expect(orderByProps(obj))
    .toEqual([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ]);
});

test('The order of the elements must match the 2nd argument of the function', () => {
  expect(orderByProps(obj, ['level', 'defence', 'health', 'name', 'attack']))
    .toEqual([
      { key: 'level', value: 2 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
    ]);
});