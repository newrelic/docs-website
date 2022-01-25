const { Command } = require('commander');

const Actions = require('./actions');

const getRenameChanges = async () => {
  const renamedFiles = await Actions.getRenamedFiles();
  return Actions.getRenameChanges(renamedFiles);
};

const listOrphans = new Command('list-orphans');
listOrphans.description('list orphaned files').action(() => {
  const orphanedFiles = Actions.getOrphanedFiles();
  Actions.printOrphanedFiles(orphanedFiles);
});

const deleteOrphans = new Command('delete-orphans');
deleteOrphans
  .description('delete orphaned files')
  .action(Actions.deleteOrphanedFiles);

const listRenames = new Command('list-renames')
  .description('list renamed files')
  .action(async () => {
    Actions.printRenameChanges(await getRenameChanges());
  });

const makeRenames = new Command('make-renames')
  .description('make changes to renamed files')
  .action(async () => {
    Actions.makeRenameChanges(await getRenameChanges());
  });

module.exports = { listOrphans, deleteOrphans, listRenames, makeRenames };
