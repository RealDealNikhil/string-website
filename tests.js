// store test results
var results = {
  total: 0,
  failed: 0
};

// simple object equality comparison
function isEqual(a, b) {
  a_props = Object.getOwnPropertyNames(a);
  b_props = Object.getOwnPropertyNames(b);
  if (a_props.length != b_props.length) {
    return false;
  }
  for (var i = 0; i < a_props.length; i++) {
    var prop = a_props[i];
    if (a[prop] !== b[prop]) {
        return false;
    }
  }
  return true;
}

// general testing function
function test(str, expected_rev, expected_count) {
  var result = reverse_count(str);
  var reversed = result.reversed;
  var count = result.count;
  if (reversed !== expected_rev || !arrays_equal(count, expected_count)) {
    results.failed++;
  }
  results.total++;
}


console.log(results.failed + " out of " + results.total + " tests failed");
