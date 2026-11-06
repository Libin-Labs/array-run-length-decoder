import * as api from '@lp-labs/array-run-length-decoder';
import { decodeRuns } from '@lp-labs/array-run-length-decoder';
console.log(decodeRuns([{ value: 'x', count: 3 }]));
// @ts-expect-error invalid argument must be rejected by declarations
api.decodeRuns('runs');
