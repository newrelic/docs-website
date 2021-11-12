const { Command } = require('commander');

const send = new Command('send');

send
  .description('send queued translation requests to vendor to translate')
  .option('--project-id <id>', 'id of project to send translation requests for')
  .action((options, command) => {
    console.log(`${JSON.stringify(options)}`);
    console.log(`${JSON.stringify(command)}`);
  });

module.exports = send;
