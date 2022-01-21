const { Command } = require('commander');

const Actions = require('./actions');

const listOrphans = new Command('list-orphans');
listOrphans
  .description('list orphaned files')
  .action(Actions.listOrphanedFiles);

const deleteOrphans = new Command('delete-orphans');
deleteOrphans
  .description('delete orphaned files')
  .action(Actions.deleteOrphanedFiles);

module.exports = { listOrphans, deleteOrphans };
