const LENGTH = 26;
var arr = new Array(26);

function reverse_count(str) {
  var new_str = "";

}

function operate(str) {
  var reversed = str.split("").reverse().join("");
  var c;
  var index;
  for (var i = 0; i < reversed.length; i++) {
    c = reversed.charAt(i).toLowerCase();
    index = c.charCodeAt(0) - 97;
    if (arr[index] === undefined) {
      arr[index] = 0;
    }
    arr[index]++;
  }

  // get unique characters
  var unique = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      unique += String.fromCharCode(i + 97) + " = " + arr[i] + "<br>";
    }
  }
  $("#data").html(arr + "<br>" + str + "<br>" + reversed + "<br>" + unique);
  console.log(arr);
  console.log(str);
  console.log(reversed);
}

$(document).ready(function() {
  $('#str-btn').click(function() {
    operate($('#str').val());
    return false;
  });
});
