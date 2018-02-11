var results = {
  total: 0,
  failed: 0
};



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
