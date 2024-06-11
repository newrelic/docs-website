import * as fs from 'fs/promises';
import * as path from 'path';
import * as assert from 'uvu/assert';

import slugify from './scripts/utils/slugify.js';

const SNAPSHOT_DIR = './__snapshots__/';

/**
 * create snapshot tests.
 * a snapshot is created on the first run of a test if one doesn't already exist.
 * snapshots can be updated by setting `UPDATE_UVU_SNAPSHOTS=true` as an environment variable.
 * ie: `UPDATE_UVU_SNAPSHOTS=true yarn test:esm`
 *
 * @example
 * ```js
 *   import { initSnapshots } from '../esm-test-utils.mjs'
 *
 *   const snapshot = await initSnapshots('suite-name')
 *
 *   test('serializes Button to html', await () => {
 *     const result = serialize(someStuff)
 *     await snapshot('serializes Button to html', result)
 *   })
 * ```
 */
export const initSnapshots = async (suiteName) => {
  const suiteDir = path.join(SNAPSHOT_DIR, slugify(suiteName));
  // this will error if the path already exists, the catch ignores it
  await fs.mkdir(suiteDir, { recursive: true }).catch(() => {});

  return async (testName, actual) => {
    const snapshotPath = path.join(suiteDir, slugify(testName));
    const expected = await fs.readFile(snapshotPath, 'utf-8').catch(() => null);

    if (expected == null || process.env.UPDATE_UVU_SNAPSHOTS === 'true') {
      await fs.writeFile(snapshotPath, actual, 'utf-8');
      return true;
    } else {
      return assert.fixture(actual, expected);
    }
  };
};
