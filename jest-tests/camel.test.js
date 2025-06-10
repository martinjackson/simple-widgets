// ZenCoder prompt: write a unit test for src/camel.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

import { toCamelCase } from '../src/camel.js';

describe('toCamelCase Function', () => {
  it('should be defined', () => {
    expect(toCamelCase).toBeDefined();
  });

  it('should convert snake_case to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
  });

  it('should convert space-separated words to camelCase', () => {
    expect(toCamelCase('hello world')).toBe('helloWorld');
  });

  it('should handle mixed case input', () => {
    expect(toCamelCase('Hello World')).toBe('helloWorld');
  });

  it('should remove hash symbols', () => {
    expect(toCamelCase('hello#world')).toBe('helloWorld');
  });

  it('should handle empty strings', () => {
    expect(toCamelCase('')).toBe('');
  });

  it('should handle single words', () => {
    expect(toCamelCase('hello')).toBe('hello');
  });

  it('should handle strings with multiple spaces', () => {
    expect(toCamelCase('hello   world')).toBe('helloWorld');
  });
});
