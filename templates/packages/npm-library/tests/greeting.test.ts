import { describe, expect, it } from 'vitest';
import { createGreeting } from '../src/index.js';

describe('createGreeting', () => {
  it('creates a greeting with the default punctuation', () => {
    expect(createGreeting({ name: 'Ajoy' })).toBe('Hello, Ajoy!');
  });

  it('supports custom punctuation', () => {
    expect(createGreeting({ name: 'Ajoy', punctuation: '.' })).toBe(
      'Hello, Ajoy.',
    );
  });

  it('trims surrounding whitespace', () => {
    expect(createGreeting({ name: '  Ajoy  ' })).toBe('Hello, Ajoy!');
  });

  it('rejects an empty name', () => {
    expect(() => createGreeting({ name: '   ' })).toThrow(
      'name must not be empty',
    );
  });
});
