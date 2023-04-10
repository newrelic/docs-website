import { promisify } from 'util';
import { exec as callback_exec } from 'child_process';

const exec = promisify(callback_exec);

let out = await exec('git diff --diff-filter=d --cached --name-only').catch(
  (e) => e
);

console.log(out.stdout);
