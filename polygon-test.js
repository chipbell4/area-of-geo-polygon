var calculateError = require('./calculate-error');
var project = require('./projection');
var area = require('area-polygon');

/**
 * Calculates the error from our projection for the specified polygon
 *
 * @param {Array} polygon An array of points to project and then calculate area for
 * @param {Number} expectedArea The expected area of the polygon
 * @return {Object} An object with the calculated area, and an percentage error showing how far off from the expected we were
 */
module.exports = function(polygon, expectedArea) {
  // first, project
  var projectedPolygon = polygon.map(project);

  // now the area
  var polygonArea = area(projectedPolygon);

  // spit back the associated error
  return {
    actual: polygonArea,
    percent: calculateError(expectedArea, polygonArea)
  };
};
