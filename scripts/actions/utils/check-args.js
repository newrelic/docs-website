/**
 * Checks the number of arguments passed to the script.
 * Will exit if the incorrect number of argument is passed in.
 * @param {number} length The desired number of arguments.
 */
const checkArgs = (length) => {
  const { argv } = process;

  if (argv.length !== length) {
    showError('expected 1 argument: API_URL');
    console.log(`[?] Usage:\n\tnode ${argv[1]} API_URL`);

    process.exit(1);
  }
};

module.exports = checkArgs;
