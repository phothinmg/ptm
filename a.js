/**
 * Checks if a given Gregorian date is after the Gregorian calendar reform.
 *
 * @param {number} year - Gregorian year.
 * @param {number} month - Gregorian month (1-12).
 * @param {number} day - Gregorian day(1-31).
 * @return {boolean} True if the date is after the reform, false otherwise.
 */
function isGregorian(year, month, day) {
  return (
    year > 1582 || (year === 1582 && (month > 10 || (month === 10 && day > 14)))
  );
}

/**
 * Adjusts a Gregorian date to account for January and February being
 * part of the previous year when using the Meeus/Zeller style.
 *
 * @param {number} year - Gregorian year.
 * @param {number} month - Gregorian month (1-12).
 * @param {number} day - Gregorian day (1-31).
 */
function adjustJanFeb(year, month, day) {
  // Adjust Jan/Feb to months 13/14 of previous year (Meeus / Zeller style)
  if (month < 3) {
    year -= 1;
    month += 12;
  }
  return { year, month, day };
}

/**
 * Integer truncation function.
 *
 * @param {number} d - The number to perform integer truncation on.
 * @return {number} The result of integer truncation.
 *
 * This function behaves as follows:
 *   - If d is positive, return Math.floor(d).
 *   - If d is equal to Math.floor(d), return d.
 *   - Otherwise, return Math.floor(d) + 1.
 */
function integerTruncation(d) {
  //integer truncation
  if (d > 0) {
    return Math.floor(d);
  }
  if (d === Math.floor(d)) {
    return d;
  }
  // moves toward zero
  return Math.floor(d) + 1;
}

/**
 * Century anchor correction factor for Julian Day calculation.
 *
 * @param {number} year - Gregorian year.
 * @param {number} month - Gregorian month (1-12).
 * @param {number} day - Gregorian day (1-31).
 * @return {number} Century anchor correction factor.
 */
function gregorianCorrectionFactor(year, month, day) {
  // Century Anchor
  const A = integerTruncation(year / 100);
  let B = 0;
  if (isGregorian(year, month, day)) {
    B = 2 - A + integerTruncation(A / 4);
  }
  return B;
}
/**
 * Converts hours, minutes, and seconds to a fractional day value.
 *
 * @param {number} h - Hours (0-23).
 * @param {number} m - Minutes (0-59).
 * @param {number} s - Seconds (0-59).
 * @return {number} Fractional day value.
 */
function hms2f(h, m, s) {
  return h / 24 + m / 1440 + s / 86400;
}
/**
 * Converts a Gregorian date to a Julian Day value.
 *
 * @param {number} year - Gregorian year.
 * @param {number} month - Gregorian month (1-12).
 * @param {number} day - Gregorian day (1-31).
 * @param {number} [hour=12] - Hours (0-23).
 * @param {number} [minute=0] - Minutes (0-59).
 * @param {number} [second=0] - Seconds (0-59).
 * @return {number} Julian Day value.
 */
function gregorianToJD(year, month, day, hour = 12, minute = 0, second = 0) {
  const adjusted = adjustJanFeb(year, month, day);
  year = adjusted.year;
  month = adjusted.month;
  day = adjusted.day;
  const B = gregorianCorrectionFactor(year, month, day);
  const dayFraction = hms2f(hour, minute, second);
  // Meeus algorithm (JDN has fractional .5 offset included)
  let julianDay =
    integerTruncation(365.25 * (year + 4716)) +
    integerTruncation(30.6001 * (month + 1)) +
    day +
    B -
    1524.5;
  return julianDay + dayFraction;
}
