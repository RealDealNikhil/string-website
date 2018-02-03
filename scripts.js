// Supported ASCII characters
const RE = /[!-~]/;
const SHIFT = 33;

// to hold unique characters
var arr = [];

// reverse the string and count unique characters
function reverse_count(str) {
  var new_str = "";
  var c;
  var index;
  for (var i = str.length - 1; i >= 0; i--) {
    // add str element to new_str in reversed order
    new_str += str[i];
    // check if character matches supported characters
    if (str[i].match(RE) !== null) {
      // add character count to array
      index = str[i].charCodeAt(0) - SHIFT;
      if (arr[index] === undefined) {
        arr[index] = 0;
      }
      arr[index]++;
    }
  }
  return new_str;
}

// perform string reversal, character count, and printing operations
function operate(str) {
  // reset uniqueness array
  arr = [];
  var reversed = reverse_count(str);
  // get unique characters
  var unique = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      unique += String.fromCharCode(i + SHIFT) + ": <em>" + arr[i] + "</em><br>";
    }
  }
  // print all info on webpage
  $("#data").html("Reversed: <em>" + reversed + "</em><br>" + unique);
  console.log(arr);
}

$(document).ready(function() {
  $('#str-btn').click(function() {
    operate($('#str').val());
    return false;
  });
});
