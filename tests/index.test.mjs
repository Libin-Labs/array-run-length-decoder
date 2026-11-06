import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('expands runs', () => {
  assert.deepEqual(
    api.decodeRuns([
      { value: 'a', count: 2 },
      { value: 'b', count: 1 },
    ]),
    ['a', 'a', 'b'],
  );
});
test('handles empty runs', () => {
  assert.deepEqual(api.decodeRuns([]), []);
});
test('supports one element run', () => {
  assert.deepEqual(api.decodeRuns([{ value: 4, count: 1 }]), [4]);
});
test('preserves null value', () => {
  assert.deepEqual(api.decodeRuns([{ value: null, count: 2 }]), [null, null]);
});
test('rejects zero count', () => {
  assert.throws(() => api.decodeRuns([{ value: 1, count: 0 }]), RangeError);
});
test('rejects malformed run', () => {
  assert.throws(() => api.decodeRuns([null]), RangeError);
});
