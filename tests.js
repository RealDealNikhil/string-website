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
  if (reversed !== expected_rev || !isEqual(count, expected_count)) {
    results.failed++;
  }
  results.total++;
}

// simple cases testing differentiating capital letters and ASCII character support
test("Hello, World!", "!dlroW ,olleH", {'H': 1, 'e': 1, 'l': 3, 'o': 2, ',': 1,
    'W': 1, 'r': 1, 'd': 1, '!': 1});
test("Nikhil Suri, 19.", ".91 ,iruS lihkiN", {'N': 1, 'i': 3, 'k': 1, 'h': 1,
    'l': 1, 'S': 1, 'u': 1, 'r': 1, ',': 1, '1': 1, '9': 1, '.': 1});
test(":://__racecar__//::", ":://__racecar__//::", {':': 4, '/': 4, '_': 4,
    'r': 2, 'a': 2, 'c': 2, 'e': 1});
test("NnIiKkHhIiLl          ", "          lLiIhHkKiInN", {'N': 1, 'n': 1, 'I': 2,
    'i': 2, 'K': 1, 'k': 1, 'H': 1, 'h': 1, 'L': 1, 'l': 1});
test("     ", "     ", {});
// spam with large input
test("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
    "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", {'1': 117});
test("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba",
    {'a': 5, 'b': 5, 'c': 5, 'd': 5, 'e': 5, 'f': 5, 'g': 5, 'h': 5, 'i': 5,
    'j': 5, 'k': 5, 'l': 5, 'm': 5, 'n': 5, 'o': 5, 'p': 5, 'q': 5, 'r': 5,
    's': 5, 't': 5, 'u': 5, 'v': 5, 'w': 5, 'x': 5, 'y': 5, 'z': 5, 'A': 5,
    'B': 5, 'C': 5, 'D': 5, 'E': 5, 'F': 5, 'G': 5, 'H': 5, 'I': 5, 'J': 5,
    'K': 5, 'L': 5, 'M': 5, 'N': 5, 'O': 5, 'P': 5, 'Q': 5, 'R': 5, 'S': 5,
    'T': 5, 'U': 5, 'V': 5, 'W': 5, 'X': 5, 'Y': 5, 'Z': 5});
// non-ASCII characters
test("पसमदअवफ", "फवअदमसप", {});
test("我是蘇努楷", "楷努蘇是我", {});
console.log(results.total - results.failed + " out of " + results.total + " tests passed");
