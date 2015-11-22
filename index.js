var polygonTest = require('./polygon-test');

var testCases = [
  {
    name: 'Colorado',
    expectedArea: 104185,
    polygon: [
      [41.00477542222949, -109.05029296875],
      [40.98819156349393, -102.030029296875],
      [37.00255267215955, -102.06298828125],
      [36.99377838872517, -109.05029296875]
    ],
  }
];

console.log('RUNNING TESTS');
testCases.forEach(function(testCase) {
  var error = polygonTest(testCase.polygon, testCase.expectedArea);

  console.log(testCase.name, error.toFixed(2) + '%');
});
console.log('DONE');
