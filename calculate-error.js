/**
 * Calculates the error for given expected and actual value
 */
module.exports = function(expected, actual) {
  return 100 * Math.abs(expected - actual) / Math.abs(expected);
};
