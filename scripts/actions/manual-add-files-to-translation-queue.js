const { Command } = require('commander');
const {
  addFilesToTranslationQueue,
} = require('./add-files-to-translation-queue');
const { getFilesRecursively } = require('../utils/getFiles');

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
    )
    .option(
      '-all, --allFiles',
      'Boolean to send all files for translation (for new languages)'
    );
  program.parse(process.argv);
  return program.opts();
};

const parseFilesString = (filesString) =>
  filesString.split(',').map((str) => str.trim());

const main = async () => {
  const options = getCommandLineOptions();
  const filesString = options.files || null;
  const allFiles = options.allFiles || null;
  console.log(options);
  if (filesString) {
    console.log('shouldnt be here');
    const fileNames = parseFilesString(filesString);
    // await addFilesToTranslationQueue(fileNames, options);
  } else if (allFiles) {
    console.log('should be here');
    const fileNames = getFilesRecursively('src/content/docs');
    console.log(fileNames.length, fileNames[0]);
    await addFilesToTranslationQueue(fileNames, options);
  }

  process.exit(0);
};

main();
