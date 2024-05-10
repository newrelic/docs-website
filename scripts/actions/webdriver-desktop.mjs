/* eslint-disable no-console */

/* this script is mostly mirrored in our scripted web browser
 * synthetics check that runs on the production site.
 * if you make updates, be sure to add them there as well.
 * https://staging.onenr.io/037jbB4Akjy
 *
 *
 * To test locally:
 * Run `yarn start`, and make sure the localhost testUrl
 * matches the one where your site is running.
 *
 * Then run `yarn webdriver-desktop`. It is very slow.
 *
 * If you want to watch the webdriver run in a browser
 * you can comment out the options on lines 25-27
 */

import assert from 'assert';
import { Builder, By, WebElement, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';

const options = new Options();
// options required for github action to run chromedriver properly
options.addArguments('no-sandbox');
options.addArguments('disable-dev-shm-usage');
options.addArguments('headless');

const TIMEOUT = 10000;
const SLEEP_TIME = 5000;

const waitForXPath = (xpath, timeout = TIMEOUT) =>
  driver.wait(until.elementsLocated(By.xpath(xpath)), timeout);

const main = async () => {
  console.log('\n🧪 Beginning desktop test...');
  // running on develop builds because the url is static
  // github workflow triggers on PRs to main

  const testUrl =
    process.env.WEBDRIVER_ENV === 'main'
      ? 'https://develop--docs-website-netlify.netlify.app/'
      : 'http://localhost:8000/';

  console.log('\n🔍 looking for site at', testUrl);
  await driver.get(testUrl + 'docs/mdx-test-page/');

  console.log('\n⏳ Waiting for kitchen sink page to load.');
  // Ensure page loads, 2000 ms wait
  await driver.sleep(SLEEP_TIME);

  // order here matters — some tests scroll the page
  await collapserTest();
  await searchTest();
  await navTest();

  console.log('\n⏳ Waiting for home page to load.');
  await driver.get(testUrl);

  // Ensure home page loads, 2000 ms wait
  await driver.sleep(SLEEP_TIME);
  await tileTest();

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
  const [releaseNotes] = await waitForXPath(releaseNotesXPath);
  const [initialNextNode] = await waitForXPath(nextNodeXPath);
  await driver.executeScript('arguments[0].scrollIntoView()', releaseNotes);
  console.log('\nClicking Release Notes div in the Nav');
  await releaseNotes.click();
  const [afterNextNode] = await waitForXPath(nextNodeXPath);
  assert.notEqual(
    initialNextNode,
    afterNextNode,
    'clicking Release Notes in the nav did not expand the Release Notes section'
  );
};

const searchTest = async () => {
  const [searchInput] = await waitForXPath('//aside//input');
  console.log('\nClicking search input');
  await searchInput.click();
  const activeEl = await driver.executeScript('return document.activeElement');
  assert(
    WebElement.equals(activeEl, searchInput),
    'clicking search input did not focus the page on the search input'
  );
};

const tileTest = async () => {
  const initialUrl = await driver.getCurrentUrl();
  console.log('\nClicking home page Doctile');
  // Added this xpath for the scroll function.
  // for some reason, when running in headless mode the site
  // header overlaps the tile we need to click
  const [popularDocsSection] = await waitForXPath(
    '//main//section//h3[text()="Popular docs"]'
  );
  const [firstDocTile] = await waitForXPath(
    '//main//section//h3[text()="Popular docs"]/following::a'
  );
  // sometimes the cookie banner covers the doc tile so we need to scroll
  await driver.executeScript(
    'arguments[0].scrollIntoView()',
    popularDocsSection
  );

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
