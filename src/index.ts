export function decodeRuns<T>(runs: readonly { readonly value: T; readonly count: number }[]): T[] {
  if (!Array.isArray(runs)) throw new TypeError('Expected runs array');
  let size = 0;
  for (const run of runs) {
    if (!run || !Number.isSafeInteger(run.count) || run.count < 1)
      throw new RangeError('Run count must be a positive safe integer');
    size += run.count;
    if (size > 1000000) throw new RangeError('Expanded output exceeds one million items');
  }
  return runs.flatMap((run) => Array<T>(run.count).fill(run.value));
}
