const { Command } = require('commander');

/**
 * @example queue --files test.txt test2.txt
 * @example queue --pull-request 1234
 */
const queue = new Command('queue');

queue
  .description(
    'identify translation requests that can be made from a set of files or a PR, then queue up the requests'
  )
  .option('--pull-request <number>', 'pull request to look at')
  .option('--files <files...>', 'explicit files to review and queue')
  .action((options, command) => {
    console.log(`${JSON.stringify(options.pullRequest)}`);
    console.log(`${JSON.stringify(options.files)}`);
    //console.log(`${JSON.stringify(command)}`);
  });

module.exports = queue;
