var calculateError = require('./calculate-error');
var project = require('./projection');
var area = require('area-polygon');

/**
 * Calculates the error from our projection for the specified polygon
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
