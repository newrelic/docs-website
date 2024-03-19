'using strict';
import { Command } from 'commander';

import * as Actions from './actions';

import type { FileRename } from './actions';

const getRenameChanges = async (): Promise<FileRename[]> => {
  const renamedFiles = await Actions.getRenamedFiles();
  return Actions.getRenameChanges(renamedFiles);
};

const listOrphans = new Command('list-orphans');
listOrphans.description('list orphaned files').action(() => {
  const orphanedFiles = Actions.getOrphanedFiles();
  Actions.printOrphanedFiles(orphanedFiles);
});

const deleteOrphans = new Command('delete-orphans');
deleteOrphans.description('delete orphaned files').action(() => {
  const orphanedFiles = Actions.getOrphanedFiles();
  Actions.deleteOrphanedFiles(orphanedFiles);
});

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

export { listOrphans, deleteOrphans, listRenames, makeRenames };
