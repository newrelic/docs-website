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
options.addArguments('headless');

const TIMEOUT = 10000;
const SLEEP_TIME = 500;

const waitForXPath = (xpath, timeout = TIMEOUT) =>
  driver.wait(until.elementsLocated(By.xpath(xpath)), timeout);

const main = async () => {
  // running on develop builds because the url is static
  // github workflow triggers on PRs to main
  const testUrl =
    // TODO: search modal click breaks page on mobile localhost
    process.env.WEBDRIVER_ENV === 'main'
      ? 'https://docswebsitedevelop.gatsbyjs.io/'
      : 'http://localhost:8000/';

  await driver.get(testUrl + 'docs/mdx-test-page/');

  // order here matters — some tests scroll the page
  // `searchTest` opens the search modal, any tests on the same page
  // that come afterwards would have to close the modal
  await collapserTest();
  await searchTest();

  await driver.get(testUrl);
  await tileTest();
  await navTest();

  // this step isn't necessary in synthetics
  await driver.quit();
};

const collapserTest = async () => {
  const [firstCollapser, secondCollapser] = await waitForXPath(
    '//h5[contains(@id, "collapser")]/ancestor::button'
  );
  const { y: initialTop } = await secondCollapser.getRect();
  console.log('clicking first collapser');
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
  const releaseNotesXPath = '//div[@data-flip-id="Release notes"]';
  const nextNodeXPath = `${releaseNotesXPath}/following-sibling::div[1]`;
  const [hamburgerButton] = await waitForXPath(
    '//header//button[contains(@aria-label, "Mobile")]'
  );
  await hamburgerButton.click();
  await driver.sleep(SLEEP_TIME);
  // nav on mobile is a new list, the desktop nav comes first in the DOM but is hidden
  const [_desktopRN, releaseNotes] = await waitForXPath(releaseNotesXPath);
  const [_desktopINN, initialNextNode] = await waitForXPath(nextNodeXPath);
  await driver.executeScript('arguments[0].scrollIntoView()', releaseNotes);
  console.log('clicking Release Notes div');
  await releaseNotes.click();
  const [_desktopANN, afterNextNode] = await waitForXPath(nextNodeXPath);
  assert.notEqual(
    initialNextNode,
    afterNextNode,
    'clicking Release Notes in the nav did not expand the Release Notes section'
  );
};

const searchTest = async () => {
  const [searchButton] = await waitForXPath('//a[contains(@href, "?q=")]');
  console.log('clicking search button');
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
  console.log('clicking doc tile');
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
