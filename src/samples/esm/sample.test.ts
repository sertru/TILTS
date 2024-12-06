import { expect, spyOn, test } from 'bun:test';
import { sampleEsm } from './sample.ts';

test('Calling sampleEsm prints with console.log', () => {
  // Arrange
  const spy = spyOn(console, 'log');

  // Act
  sampleEsm();

  // Expect
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy.mock.calls).toEqual([
    [
      'This is sample function to test out ESM imports with file extensions and producing valid dist for both ESM and CJS.',
    ],
  ]);
});
