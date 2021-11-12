'use strict';

const { program } = require('commander');

const download = require('./commands/download');
const queue = require('./commands/queue');
const send = require('./commands/send');

program
  .addCommand(download)
  .addCommand(queue)
  .addCommand(send);

program.parse();

/**
 * @example machine-translation queue
 * @example machine-translation send
 * @example machine-translation download
 */
