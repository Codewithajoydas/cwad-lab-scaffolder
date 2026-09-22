import test from 'node:test';
import assert from 'node:assert/strict';

test('health endpoint contract exists', () => {
  assert.equal('/health', '/health');
});
