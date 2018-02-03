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
  // get unique characters, punctuation markers, and numbers
  var unique_char = "";
  var unique_punc = "";
  var unique_nums = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      c = String.fromCharCode(i + SHIFT)
      data_string = c + ": <em>" + arr[i] + "</em>&nbsp;&nbsp;&nbsp;&nbsp;"
      if (c.match(/[A-Za-z]/) !== null) {
        unique_char += data_string;
      } else if (c.match(/[0-9]/) !== null) {
        unique_nums += data_string;
      } else {
        unique_punc += data_string;
      }
    }
  }
  // print all info on webpage
  unique_char = "Characters:<br><p>" + unique_char + "</p><br>";
  unique_punc = "Punctuation:<br><p>" + unique_punc + "</p><br>";
  unique_nums = "Numbers:<br><p>" + unique_nums + "</p><br>"
  $("#data").html("Reversed: <em>" + reversed + "</em><br>" + unique_char + unique_punc + unique_nums);
  console.log(arr);
}

$(document).ready(function() {
  $('#str-btn').click(function() {
    operate($('#str').val());
    return false;
  });
});
