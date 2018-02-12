# string website
### by Nikhil Suri

This website allows you to enter a string of any length and will display it reversed with a count of every single unique character included. The algorithm I use will reverse any sequence of characters that you enter, but only supports ASCII characters in its uniqueness count (more specifically, only ASCII characters with decimal numbers 33-126). I have tried to be very creative with this very simple idea: in addition to a color palette and personalized logo, I have customized the input and output areas, and various other elements on top of bootstrap css. For a bit of extra flair, I use the google-charts API to display a pie chart of the unique characters in the string that you enter. Play around with it! I have thoroughly enjoyed creating this project and have learned a lot in the process.

The algorithm that reverses the string and counts each character progresses as follows:
  1. I loop through the string backwards.
    * Add each character to a reversed string variable.
    * If the character is supported, increment its count in a table of character counts.
    * Return the reversed string and the table of character counts.
  2. Add the reversed string to its respective html output div.
  3. Process the dictionary of characters and add each count to its respective html output div and correctly formats an array for the google-charts pie chart.
    * There are separate sections for letters, punctuation, and numbers counts.

Upon loading the webpage, I run a test suite which outputs the number of successful tests in the console window. I have tried to capture simple cases, edge cases, large inputs, and entering unsupported characters in these tests.
