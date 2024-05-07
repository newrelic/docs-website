'use strict';

import { program } from 'commander';

import * as Commands from './commands';

program
  .addCommand(Commands.listOrphans)
  .addCommand(Commands.deleteOrphans)
  .addCommand(Commands.listRenames)
  .addCommand(Commands.makeRenames);

program.parseAsync();

/**
 * @example npx ts-node cli.js list-orphans
 * @example npx ts-node cli.js delete-orphans
 * @example npx ts-node cli.js list-renames
 * @example npx ts-node cli.js make-renames
 */
