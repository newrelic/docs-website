/* eslint-disable no-console */
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

const verifySteps = (steps, installPage) => {
  let issues = 0;

  steps.forEach((step) => {
    const fileExists =
      step.filePath && fs.existsSync(path.join(process.cwd(), step?.filePath));
    if (
      (step.filePath && !step.filePath.includes(`/install/${installPage}/`)) ||
      fileExists === false
    ) {
      console.error(
        '\x1b[31m%s\x1b[0m',
        `\n (!) ${installPage}.yaml`,
        `\x1b[33m${step.filePath}\x1b[0m was not found in \x1b[32msrc/install/${installPage}/\x1b[0m \n`,
        'make sure the file exists and check for spelling mistakes \n'
      );
      issues = ++issues;
    }
    step.overrides?.forEach((override) => {
      const overrideFileExists =
        override.filePath &&
        fs.existsSync(path.join(process.cwd(), override?.filePath));

      if (
        (!override?.filePath?.includes(`/install/${installPage}/`) &&
          override.filePath) ||
        overrideFileExists === false
      ) {
        console.error(
          '\x1b[31m%s\x1b[0m',
          `\n (!) ${installPage}.yaml`,
          `\x1b[33m${override.filePath}\x1b[0m was not found in \x1b[32msrc/install/${installPage}/\x1b[0m \n`,
          'make sure the file exists and check for spelling mistakes or a missing file extension (.mdx) \n'
        );
        issues = ++issues;
      }
      if (!override?.selectedOptions) {
        console.error(
          '\x1b[31m%s\x1b[0m',
          `\n (!) ${installPage}.yaml`,
          `override \x1b[33m${override.filePath}\x1b[0m does not have a value for \x1b[33mselectedOptions\x1b[0m \n This is required so that the page knows which optionType/value will cause it to override \n`
        );
        issues = ++issues;
      }
      override?.selectedOptions.length &&
        override.selectedOptions.forEach((option) => {
          if (!option?.optionType) {
            console.error(
              '\x1b[31m%s\x1b[0m',
              `\n (!) ${installPage}.yaml`,
              `override \x1b[33m${override.filePath}\x1b[0m is missing an \x1b[33moptionType\x1b[0m \n if this override has an optionType double check that the indenting is correct \n`
            );
            issues = ++issues;
          }
        });
    });
  });
  if (issues > 0) {
    console.error(
      '%s\x1b[31m%s\x1b[0m',
      'please fix ',
      issues,
      'issue(s) above \n'
    );
    process.exit(1);
  }
};
const verifyAppInfo = (appInfo, installPage) => {
  let issues = 0;

  appInfo.forEach((option) => {
    if (!option.placeholder) {
      console.error(
        '\x1b[31m%s\x1b[0m',
        `\n (!) ${installPage}.yaml > appInfo > `,
        `placeholder cannot be null \n`
      );
      issues = ++issues;
    }
  });
  if (issues > 0) {
    console.error(
      '%s\x1b[31m%s\x1b[0m',
      'please fix ',
      issues,
      'issue(s) above \n'
    );
    process.exit(1);
  }
};

const checkForNullValues = (nonNullables, installPage) => {
  let nullValueExists = false;
  const configKeys = Object.keys(nonNullables);
  configKeys.forEach((key) => {
    if (!nonNullables[key]) {
      console.error(
        '\x1b[31m%s\x1b[0m',
        `\n (!) ${installPage}.yaml`,
        `${key} cannot be null \n`
      );
      nullValueExists = true;
    }
  });
  nullValueExists && process.exit(1);
};

const verifyAgentName = (agentName) => {
  const folderExists = fs.existsSync(
    path.join(process.cwd(), `/src/install/${agentName}`)
  );
  if (!folderExists) {
    console.error(
      '\x1b[31m%s\x1b[0m%s\x1b[31m%s',
      '\n (!) agentName error: ',
      'Could not find a corresponding folder in src/install named ',
      `${agentName} \n`
    );
    process.exit(1);
  }
};

const main = () => {
  const installPage = process.argv.slice(2);

  if (installPage.length === 0) {
    // just a little styling for the output
    console.error(
      '\x1b[31m%s\x1b[0m',
      '\n (!)',
      'Please provide the name of the agent/install page',
      '\n eg. yarn verify-installpage java \n'
    );
    process.exit(1);
  }
  try {
    const file = fs.readFileSync(
      path.join(process.cwd(), `/src/install/config/${installPage}.yaml`),
      'utf8'
    );
    try {
      const data = yaml.load(file);
      const { agentName, agentType, title, steps, appInfo } = data;
      checkForNullValues({ agentName, agentType, title, appInfo }, installPage);
      verifyAgentName(agentName);
      verifyAppInfo(appInfo, installPage);
      verifySteps(steps, installPage);
    } catch (e) {
      console.error(
        '\x1b[31m%s\x1b[0m%s\x1b[31m%s\x1b[0m%s',
        '\n(!)',
        `There is a syntax issue in ${installPage}.yaml \n These are sometimes caused by apostrophes. Be sure to use double quotes around any strings with apostrophes \n`,
        '\nerror message: ',
        `${e.message} \n`
      );
      process.exit(1);
    }
  } catch (e) {
    console.error(
      '\x1b[31m%s\x1b[0m',
      '\n (!)',
      `Cannot parse ${installPage}.yaml, make sure the file exists \n`,
      `${e.message} \n`
    );
    process.exit(1);
  }
  console.log(' ✅ no issues found');
};

main();
