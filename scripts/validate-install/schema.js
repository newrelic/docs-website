/* eslint-disable no-console */
const {
  assert,
  array,
  boolean,
  object,
  optional,
  string,
  define,
  enums,
  validate,
} = require('superstruct');
const path = require('path');
const fs = require('fs');

const yaml = require('js-yaml');
const fm = require('front-matter');

const InputUrl = object({
  title: string(),
  href: string(),
});

const CodeLine = define('CodeLine', (value) =>
  typeof value === 'string' || typeof value === 'number');

const InputOption = object({
  name: string(),
  codeLine: CodeLine,
  label: string(),
  defaultValue: string(),
  toolTip: optional(string()),
  url: optional(InputUrl),
});

const Frontmatter = object({
  componentType: enums([
    'default',
    'appInfoConfig',
    'appInfoConfigOption',
    'agentConfig',
    // idk what this appInfo one is or when it got introduced
    'appInfo',
  ]),
  // should we make a specific type for steps where heading text is not optional?
  headingText: optional(string()),
  descriptionText: optional(string()),
  inputOptions: optional(array(InputOption)),
  agentConfigFilePath: optional(string()),
  optionType: optional(string()),
});

const MdxFilePath = define('MdxFilePath', (value) => {
  if (path.extname(value) !== '.mdx') {
    return {
      code: 'incorrect_file_type',
      message: `Expected an .mdx file type, but received: ${path.extname(
        value
      )} at ${value}`,
    };
  }

  if (!fs.existsSync(path.join(process.cwd(), value))) {
    return {
      code: 'file_not_found',
      message: `File not found at ${value}, check that the file exists or that the filePath is correct`,
    };
  }

  try {
    const file = fs.readFileSync(path.join(process.cwd(), value), 'utf8');
    const data = fm(file);
    const frontmatter = yaml.load(data.frontmatter);

    const [error] = validate(frontmatter, Frontmatter);

    if (error) {
      return error;
    }

    return true;
  } catch (e) {
    console.error(
      '\x1b[31m%s\x1b[0m%s\x1b[31m%s\x1b[0m%s',
      '\n(!)',
      `There is a syntax issue in ${value} \n These are sometimes caused by apostrophes. Be sure to use double quotes around any strings with apostrophes \n`,
      '\nerror message: ',
      `${e.message} \n`
    );
    process.exit(1);
  }
});

const FilePath = define('FilePath', (value) => {
  if (!fs.existsSync(path.join(process.cwd(), value))) {
    return {
      code: 'file_not_found',
      message: `No file found at ${value}, check that the file exists or that the filePath is correct`,
    };
  }

  return true;
});

const Option = object({
  value: string(),
  displayName: string(),
  logo: optional(string()),
  icon: optional(string()),
  recommendedGuided: optional(boolean()),
});

const AppInfoOption = object({
  optionType: string(),
  label: string(),
  placeholder: string(),
  options: array(Option),
});

const SelectedOptionValue = object({
  value: string(),
});

const SelectedOption = object({
  optionType: string(),
  options: array(SelectedOptionValue),
});

const Override = object({
  filePath: optional(MdxFilePath),
  selectedOptions: array(SelectedOption),
  skip: optional(boolean()),
  isConditionalStep: optional(boolean()),
});

const Step = object({
  filePath: MdxFilePath,
  overrides: optional(array(Override)),
});

const InstallConfig = object({
  agentName: string(),
  agentType: string(),
  title: string(),
  metaDescription: optional(string()),
  introFilePath: MdxFilePath,
  agentConfigFilePath: optional(FilePath),
  redirects: optional(array(string())),
  appInfo: array(AppInfoOption),
  steps: array(Step),
  whatsNextFilePath: MdxFilePath,
});

const outputErrors = (error) => {
  const errors = error.failures();
  console.log(`❌ Found ${errors.length} errors:`);
  for (const failure of error.failures()) {
    console.error(
      '\x1b[31m%s\x1b[0m',
      '(!)',
      failure.message,
      '\n   ',
      `path: ${JSON.stringify(failure.path)}`
    );
  }
};

const validateYamlFields = (data) => {
  try {
    assert(data, InstallConfig);
    return true;
  } catch (error) {
    outputErrors(error);
    return false;
  }
};

module.exports = { validateYamlFields };
