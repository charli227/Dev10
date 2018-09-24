// Creator: Charli Blank
// Date Created: 21 September, 2018
// Date Last Revised: 21 September, 2018

var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];

var max = 0;

for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++) {
  if (testArray[arrayPosition] > max) {
    max = testArray[arrayPosition];
  }
}
console.log("The maximum number in the array (" + testArray + ") is: " + max);
