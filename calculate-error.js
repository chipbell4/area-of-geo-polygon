/**
 * Calculates the error for given expected and actual value
 *
 * @param {Number} expected The expected value
 * @param {Number} actual The actual value
 * @return Number
 */
module.exports = function(expected, actual) {
  return 100 * Math.abs(expected - actual) / Math.abs(expected);
};
