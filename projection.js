/**
 * Projects a point to a different coordinate system
 *
 * @param {Array|Object} A point to project
 * @return {Object} The projected point
 */
module.exports = function(point) {
  // The snippet allows the point to be provided as an array [1, 2] or a "point" { x: 1, y: 2 }
  var latitude = point.x, longitude = point.y;
  if(point instanceof Array) {
    latitude = point[0], longitude = point[1];
  }

  // Here, we're doing Lambert equal area projection. 24901 is the circumference of the earth, but 3960 is some scale
  // factor that seems to make the errors small???
  return {
    x: longitude / 360 * 24901,
    y: Math.sin(latitude * Math.PI / 180) * 3960
  };
};
