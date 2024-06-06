/* eslint-disable no-console */

/* this script is mostly mirrored in our scripted web browser
 * synthetics check that runs on the production site.
 * if you make updates, be sure to add them there as well.
 * https://staging.onenr.io/0BoQDyBkDwy
 */

import assert from 'assert';
import { Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';

const options = new Options().setMobileEmulation({
  // uses mobile device names from chrome dev tools
  deviceName: 'iPhone 12 Pro',
});
// options required for github action to run chromedriver properly
options.addArguments('no-sandbox');
options.addArguments('disable-dev-shm-usage');
options.addArguments('--headless=new');

const TIMEOUT = 30000;
const SLEEP_TIME = 2000;

const waitForXPath = (xpath, timeout = TIMEOUT) =>
  driver.wait(until.elementsLocated(By.xpath(xpath)), timeout);

const main = async () => {
  console.log('\n🧪 Beginning mobile test...');

  // running on develop builds because the url is static
  // github workflow triggers on PRs to main
  const testUrl =
    // TODO: search modal click breaks page on mobile localhost
    process.env.WEBDRIVER_ENV === 'main'
      ? 'https://develop--docs-website-netlify.netlify.app/'
      : 'http://localhost:8000/';

  console.log('\n🔍 looking for site at', testUrl);

  // order here matters — some tests scroll the page
  // `searchTest` opens the search modal, any tests on the same page
  // that come afterwards would have to close the modal
  // and the current homepage does not have the hamburger menu for `navTest`
  await driver.get(testUrl);
  await tileTest();
  await driver.get(testUrl + 'docs/mdx-test-page/');
  await navTest();
  await collapserTest();
  await searchTest();

  // this step isn't necessary in synthetics
  await driver.quit();
};

const collapserTest = async () => {
  const [firstCollapser, secondCollapser] = await waitForXPath(
    '//h5[contains(@id, "collapser")]/ancestor::button'
  );
  const { y: initialTop } = await secondCollapser.getRect();
  console.log('\nClicking first collapser');
  await firstCollapser.click();
  // sleep is required here on mobile to account for the click delay
  await driver.sleep(SLEEP_TIME);
  const { y: afterTop } = await secondCollapser.getRect();
  assert.notEqual(
    initialTop,
    afterTop,
    'clicking the first collapser did not change the position of the second collapser'
  );
};

const navTest = async () => {
  const releaseNotesXPath = '//div[@data-flip-id="release-notes"]';
  const nextNodeXPath = `${releaseNotesXPath}/following-sibling::div[1]`;
  const [hamburgerButton] = await waitForXPath(
    '//header//button[contains(@aria-label, "Mobile")]'
  );
  console.log('\nOpening mobile Nav menu');
  let _desktopRN;
  let releaseNotes;
  const MAX_TRIES = 3;
  let tries = 0;
  do {
    await hamburgerButton.click();
    await driver.sleep(SLEEP_TIME);
    // nav on mobile is a new list, the desktop nav comes first in the DOM but is hidden
    [_desktopRN, releaseNotes] = await waitForXPath(releaseNotesXPath);
    tries += 1;
  } while (releaseNotes == null && tries < MAX_TRIES);
  const [_desktopINN, initialNextNode] = await waitForXPath(nextNodeXPath);
  await driver.executeScript('arguments[0].scrollIntoView()', releaseNotes);
  console.log('\nClicking Release Notes div');
  await releaseNotes.click();
  const [_desktopANN, afterNextNode] = await waitForXPath(nextNodeXPath);
  assert.notEqual(
    initialNextNode,
    afterNextNode,
    'clicking Release Notes in the nav did not expand the Release Notes section'
  );
  const [navCloseButton] = await waitForXPath(
    '//div[@id="portal"]//button[@aria-label="Close"]'
  );
  await navCloseButton.click();
  await driver.sleep(1000);
};

const searchTest = async () => {
  const [searchButton] = await waitForXPath('//a[contains(@href, "?q=")]');
  console.log('\nClicking search input');
  await searchButton.click();
  // sleep is required here on mobile to account for the click delay
  await driver.sleep(SLEEP_TIME);
  const activeEl = await driver.executeScript('return document.activeElement');
  assert.equal(
    await activeEl.getTagName(),
    'input',
    'clicking search button did not focus the page on an input'
  );
};

const tileTest = async () => {
  const initialUrl = await driver.getCurrentUrl();
  const [firstDocTile] = await waitForXPath(
    '//main//section//h3[text()="Popular docs"]/following::a'
  );
  // sometimes the cookie banner covers the doc tile so we need to scroll
  await driver.executeScript(
    'arguments[0].scrollIntoView(false)',
    firstDocTile
  );
  console.log('\nClicking home page Doctile');
  await firstDocTile.click();
  await driver.wait(
    until.stalenessOf(firstDocTile),
    TIMEOUT,
    'timed out waiting to navigate away from homepage'
  );
  // we can't check if the url equals the link href because of redirects,
  // so we just have to make sure the URL has changed at all
  const afterUrl = await driver.getCurrentUrl();
  assert.notEqual(
    initialUrl,
    afterUrl,
    `clicking homepage doc tile did not navigate as expected, URL did not change after clicking link`
  );
};

const driver = await new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

main();
