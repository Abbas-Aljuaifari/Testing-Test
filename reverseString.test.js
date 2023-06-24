
const reverseString = require('./reverseString.js');

describe('reverseString', () => {
  test('reverses the string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});
