var polygonTest = require('./polygon-test');

var testCases = [
];

console.log('RUNNING TESTS');
testCases.forEach(function(testCase) {
  var error = polygonTest(testCase.polygon, testCase.expectedArea);

  console.log(testCase.name, error.toFixed(2) + '%');
});
console.log('DONE');
