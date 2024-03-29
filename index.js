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
  },
  {
    name: 'Wyoming',
    expectedArea: 97818,
    polygon: [
      [44.98811302615805, -111.082763671875],
      [44.98811302615805, -104.051513671875],
      [40.98819156349393, -104.073486328125],
      [40.99648401437787, -111.0498046875]
    ],
  },
  {
    name: 'Utah',
    expectedArea: 84899,
    polygon: [
      [42.00032514831621, -114.049072265625],
      [42.00032514831621, -111.0498046875],
      [41.00477542222949, -111.0498046875],
      [40.99648401437787, -109.039306640625],
      [36.98500309285596, -109.05029296875],
      [37.00255267215955, -114.0380859375],
    ],
  },
  {
    name: 'Old DC',
    expectedArea: 100,
    polygon: [
      [38.995544, -77.041017],
      [38.892849, -76.909432],
      [38.791626, -77.039011],
      [38.893219, -77.172304],
    ],
  },
  {
    name: 'DC Now',
    expectedArea: 68.3,
    polygon: [
      [38.995544, -77.041017],
      [38.892849, -76.909432],
      [38.791626, -77.039011],
      [38.814762, -77.037380],
      [38.851430, -77.032191],
      [38.871490, -77.040743],
      [38.888776, -77.060401],
      [38.901158, -77.070525],
      [38.934372, -77.119772],
    ],
  },
];

console.log('RUNNING TESTS');
testCases.forEach(function(testCase) {
  // run the test
  var result = polygonTest(testCase.polygon, testCase.expectedArea);

  // Log out the results
  console.log(testCase.name, result.percent.toFixed(2) + '%', 'Expected ' + testCase.expectedArea, 'Got ' + result.actual);
});
console.log('DONE');
