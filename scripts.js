const LENGTH = 26;

function operate(str) {
  var reversed = str.split("").reverse().join("");
  var arr = new Array(26);
  $("#data").html(arr + ", " + str + ", " + reversed);
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
