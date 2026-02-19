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

  console.log('Manual Add Files to Translation Queue');
  console.log('─────────────────────────────────────────');
  console.log('Options:', {
    files: filesString,
    locale: options.locale || 'all locales',
    machineTranslation: options.machineTranslation || false,
  });
  console.log('');

  if (filesString) {
    const fileNames = parseFilesString(filesString);
    console.log(`Processing ${fileNames.length} file(s)...`);
    await addFilesToTranslationQueue(fileNames, options);
  } else {
    console.log('No files specified');
  }
  process.exit(0);
};

main();
