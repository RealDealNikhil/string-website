// Supported ASCII characters
const RE = /[!-~]/;

function reverse_count(str) {
  var new_str = "";
  var c;
  var dict = {};
  var key;
  for (var i = str.length - 1; i >= 0; i--) {
    // add str element to new_str in reversed order
    new_str += str[i];
    // check if character matches supported ASCII characters
    if (str[i].match(RE) !== null) {
      // add character count to dictionary
      key = str[i];
      if (dict[key] === undefined) {
        dict[key] = 0;
      }
      dict[key]++;
    }
  }
  return {
    reversed: new_str,
    count: dict
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
  var dict = results.count;
  // get unique characters, punctuation markers, and numbers
  var unique_char = "";
  var unique_punc = "";
  var unique_nums = "";
  // loop over keys in dictionary
  for (var key in dict) {
    c = key;
    chartArray.push([c, dict[key]]);
    data_string = c + ": <em class='big'>" + dict[key] + "</em>&nbsp;&nbsp;&nbsp;&nbsp;";
    if (c.match(/[A-Za-z]/) !== null) {
      unique_char += data_string;
    } else if (c.match(/[0-9]/) !== null) {
      unique_nums += data_string;
    } else {
      unique_punc += data_string;
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
  console.log(dict);
}

// properly load testing suite (from
// https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file)
function loadScript(url, callback) {
  // Adding the script tag to the head as suggested before
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  // Then bind the event to the callback function.
  // There are several events for cross browser compatibility.
  script.onreadystatechange = callback;
  script.onload = callback;

  // Fire the loading
  head.appendChild(script);
}

// loading script callback
var post_tests = function() {
  console.log("done");
};

$(document).ready(function() {
  // load google charts
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
  // load and run testing suite
  loadScript("tests.js", post_tests);
});
