const LENGTH = 26;

function operate(str) {
  reversed = str.split("").reverse().join("");
  var arr = new Array(26);
  console.log(arr);
  console.log(str);
  console.log(reversed);
}

$(document).ready(function() {
    $('#str-btn').click(function() {
      operate($('#str').val());
    });
});
