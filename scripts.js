// Supported ASCII characters
const RE = /[!-~]/;
const SHIFT = 33;

// reverse the string and count unique characters
function reverse_count(str) {
  var new_str = "";
  var c;
  var arr = [];
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
  return {
    reversed: new_str,
    count: arr
  };
}

// Draw Google chart of characters in string
function drawChart(arr) {
  var data = google.visualization.arrayToDataTable(arr);
  var options = {
    pieHole: 0.4,
    backgroundColor: '#E4E8F4',
    width: 700,
  };
  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}

// perform string reversal, character count, and printing operations
function operate(str) {
  // set array for pie chart
  var chartArray = [['Character', 'Number of Appearances']];
  // reverse string and get character count
  var results = reverse_count(str);
  var reversed = results.reversed;
  var arr = results.count;
  // get unique characters, punctuation markers, and numbers
  var unique_char = "";
  var unique_punc = "";
  var unique_nums = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      c = String.fromCharCode(i + SHIFT)
      chartArray.push([c, arr[i]]);
      data_string = c + ": <em class='big'>" + arr[i] + "</em>&nbsp;&nbsp;&nbsp;&nbsp;";
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
  if (unique_char) {
    unique_char = "Characters:<br><p>" + unique_char + "</p><br>";
  }
  if (unique_punc) {
    unique_punc = "Punctuation:<br><p>" + unique_punc + "</p><br>";
  }
  if (unique_nums) {
    unique_nums = "Numbers:<br><p>" + unique_nums + "</p><br>";
  }
  $("#reversed").html("Reversed: <em class='big'>" + reversed + "</em><br>")
  $("#data").html(unique_char + unique_punc + unique_nums);
  $("#second").css('display', 'flex');
  drawChart(chartArray);
}

$(document).ready(function() {
  google.charts.load("current", {packages:["corechart"]});
  $('#str-btn').click(function() {
    // check to see if anything was entered
    if ($('#str').val() === "") {
      // can this be animated?
      $('#str').addClass('invalid_input');
    } else {
      $('#str').removeClass('invalid_input');
      operate($('#str').val());
    }
    return false;
  });
});
