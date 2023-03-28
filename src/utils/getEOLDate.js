const {
  add,
  addMinutes,
  format,
  isBefore,
  isValid,
  isWithinInterval,
  parseISO,
} = require('date-fns');

const DATE_FORMAT = 'yyyy-MM-dd';

/**
 * Helper method for formatting a date taking into account timezones
 *
 * date-fns uses native Date under the hood, which is timezone aware,
 * and without accounting for timezone, will cause issues with formatting
 * in different timezones.
 *
 * An alternative approach would be to use `date-fns-tz`'s [format](https://date-fns.org/v2.29.3/docs/Time-Zones#date-fns-tz)
 *
 * @param {Date} date date to format
 * @returns {String} the formatted date
 */
function formatTZAware(date) {
  return format(addMinutes(date, date.getTimezoneOffset()), DATE_FORMAT);
}

/**
 * Validation method for ensuring that input is a valid date in yyyy-MM-dd format
 *
 * @param {string} str the string to validate
 * @returns {boolean} whether or not the string passed validation
 */
function isValidDateString(str) {
  return str.match(/^\d{4}-\d{2}-\d{2}$/) && isValid(parseISO(str));
}

/**
 * Method for generating an EOL date formatted as yyyy-MM-dd
 * based on the provided release date.
 *
 * Logic is slightly complicated because we've had three different EOL
 * policies since 2020, so this function accounts for all three.
 *
 * EOL Policy Announcement
 * https://docs.newrelic.com/docs/licenses/end-of-life/notification-changes-new-relic-saas-features-distributed-software/#impact
 *
 * @param {string} releaseDateString release date of software, from front-matter field releaseDate
 * @param {string} eolDateString eol date of software, prioritized for backwards compatability
 * @returns {string} EOL date for provided release date in yyyy-MM-dd format
 */
module.exports = function getEOLDate(releaseDateString, eolDateString) {
  if (eolDateString && isValidDateString(eolDateString)) {
    return formatTZAware(new Date(eolDateString));
  }

  if (!releaseDateString || !isValidDateString(releaseDateString)) {
    throw new Error(
      `releaseDate must be a valid date in ${DATE_FORMAT} format`
    );
  }

  const releaseDate = new Date(releaseDateString);
  let generatedEOLDate;

  if (isBefore(releaseDate, new Date('2020-10-01'))) {
    generatedEOLDate = add(releaseDate, { years: 3 });
  } else if (
    isWithinInterval(releaseDate, {
      start: new Date('2020-10-01'),
      end: new Date('2022-07-31'),
    })
  ) {
    generatedEOLDate = add(releaseDate, { years: 2 });
  } else {
    // TODO: If EOL policy changes, make this another else-if with a start date of 2022-08-01
    generatedEOLDate = add(releaseDate, { years: 1 });
  }

  return formatTZAware(generatedEOLDate);
};
