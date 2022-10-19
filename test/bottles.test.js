import { Bottles } from '../lib/bottles';

describe('Bottles', () => {
  test('the first verse', () => {
    const expected =
      '99 bottles of beer on the wall, ' + '99 bottles of beer.\n' +
      'Take one down and pass it around, ' + '98 bottles of beer on the wall.\n';
    expect(new Bottles().verse(99)).toBe(expected);
  });

  test('another verse', () => { const expected =
    '3 bottles of beer on the wall, ' +
    '3 bottles of beer.\n' +
    'Take one down and pass it around, ' +
    '2 bottles of beer on the wall.\n';
    expect(new Bottles().verse(3)).toBe(expected);
  });

  test('verse 2', () => { const expected =
    '2 bottles of beer on the wall, ' +
    '2 bottles of beer.\n' +
    'Take one down and pass it around, ' +
    '1 bottle of beer on the wall.\n';
    expect(new Bottles().verse(2)).toBe(expected);
  });

  test('verse 1', () => { const expected ='1 bottle of beer on the wall, ' +
  '1 bottle of beer.\n' +
  'Take it down and pass it around, ' +
  'no more bottles of beer on the wall.\n';
  expect(new Bottles().verse(1)).toBe(expected);
  });

  test('verse 0', () => { const expected =
    'No more bottles of beer on the wall, ' +
    'no more bottles of beer.\n' +
    'Go to the store and buy some more, ' +
    '99 bottles of beer on the wall.\n';
    expect(new Bottles().verse(0)).toBe(expected);
  });

  test('a couple verses', () => { const expected =
    '99 bottles of beer on the wall, ' +
    '99 bottles of beer.\n' +
    'Take one down and pass it around, ' +
    '98 bottles of beer on the wall.\n' +
    '\n' +
    '98 bottles of beer on the wall, ' +
    '98 bottles of beer.\n' +
    'Take one down and pass it around, ' +
    '97 bottles of beer on the wall.\n';
    expect(new Bottles().verses(99, 98)).toBe(expected);
  });

  test('a few verses', () => { const expected =
    '2 bottles of beer on the wall, ' +
    '2 bottles of beer.\n' +
    'Take one down and pass it around, ' +
    '1 bottle of beer on the wall.\n' +
    '\n' +
    '1 bottle of beer on the wall, ' +
    '1 bottle of beer.\n' +
    'Take it down and pass it around, ' +
    'no more bottles of beer on the wall.\n' +
    '\n' +
    'No more bottles of beer on the wall, ' +
    'no more bottles of beer.\n' +
    'Go to the store and buy some more, ' +
    '99 bottles of beer on the wall.\n';
    expect(new Bottles().verses(2, 0)).toBe(expected);
  });

  test('verse 6', () => {
    const expected =
      '1 six-pack of beer on the wall, ' +
      '1 six-pack of beer.\n' +
      'Take one down and pass it around, ' +
      '5 bottles of beer on the wall.\n' +
      '\n' +
      '5 bottles of beer on the wall, ' +
      '5 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '4 bottles of beer on the wall.\n' +
      '\n' +
      '4 bottles of beer on the wall, ' +
      '4 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '3 bottles of beer on the wall.\n' +
      '\n' +
      '3 bottles of beer on the wall, ' +
      '3 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '2 bottles of beer on the wall.\n' +
      '\n' +
      '2 bottles of beer on the wall, ' +
      '2 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '1 bottle of beer on the wall.\n' +
      '\n' +
      '1 bottle of beer on the wall, ' +
      '1 bottle of beer.\n' +
      'Take it down and pass it around, ' +
      'no more bottles of beer on the wall.\n' +
      '\n' +
      'No more bottles of beer on the wall, ' +
      'no more bottles of beer.\n' +
      'Go to the store and buy some more, ' +
      '99 bottles of beer on the wall.\n';
    expect(new Bottles().verses(6, 0)).toBe(expected);
  });

});


