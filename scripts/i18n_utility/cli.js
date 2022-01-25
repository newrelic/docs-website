'use strict';

const { program } = require('commander');

const Commands = require('./commands');

program
  .addCommand(Commands.listOrphans)
  .addCommand(Commands.deleteOrphans)
  .addCommand(Commands.listRenames)
  .addCommand(Commands.makeRenames);

program.parseAsync();

/**
 * @example node cli.js list-orphans
 * @example node cli.js delete-orphans
 */
