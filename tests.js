var results = {
  total: 0,
  failed: 0
};

function arrays_equal(a, b) {
  if (a === b) {
    return true;
  }
  if (a == null || b == null) {
    return false;
  }
  if (a.length != b.length) {
    return false;
  }
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
        return false;
    }
  }
  return true;
}

function test(str, expected_rev, expected_count) {
  var result = reverse_count(str);
  var reversed = result.reversed;
  var count = result.count;
  if (reversed !== expected_rev || !arrays_equal(count, expected_count)) {
    results.failed++;
  }
  results.total++;
}


