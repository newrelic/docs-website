const { Command } = require('commander');
const {
  addFilesToTranslationQueue,
} = require('./add-files-to-translation-queue');

const getCommandLineOptions = () => {
  const program = new Command();
  program
    .option('-f, --files <files>', 'files to translate')
    .option(
      '-mt, --machine-translation',
      'Boolean to only send files needing machine translation'
    )
    .option(
      '-l, --locale <locale>',
      'Specifiy specific language to be sent to smartling for translation'
    );
  program.parse(process.argv);
  return program.opts();
};

const parseFilesString = (filesString) =>
  filesString.split(',').map((str) => str.trim());

const main = async () => {
  const options = getCommandLineOptions();
  const filesString = options.files || null;

  if (filesString) {
    const fileNames = parseFilesString(filesString);
    await addFilesToTranslationQueue(fileNames, options);
  }
  process.exit(0);
};

main();
