const { Command } = require('commander');

const download = new Command('download');

download
  .description('hello')
  .option('--project-id <id>', 'id of project to send translation requests for')
  .action((options, command) => {
    console.log(`${JSON.stringify(options)}`);
    console.log(`${JSON.stringify(command)}`);
  });

module.exports = download;
