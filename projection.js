/**
 * Projects a point to a different coordinate system
 */
module.exports = function(point) {
  var latitude = point.x, longitude = point.y;
  if(point instanceof Array) {
    latitude = point[0], longitude = point[1];
  }

  return {
    x: longitude / 360 * 24901,
    y: Math.sin(latitude * Math.PI / 180) * 4000
  };
};
