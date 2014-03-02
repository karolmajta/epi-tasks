(function () {
  'use strict';

  var myArray = [-3, -1, 1, 8, 12, 18, 33, 44, 51, 53, 54, 80, 129, 140, 1029, 2033];
  var numberToLookFor = 18;
  var leftIndex = 0;
  var rightIndex = myArray.length-1;
  var i = 0;
  while(rightIndex - leftIndex > 1) {
    var pivotPoint = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (numberToLookFor > myArray[pivotPoint]) {
      leftIndex = pivotPoint;
    } else {
      rightIndex = pivotPoint;
    }
  }
  if (myArray[leftIndex] == numberToLookFor) {
    console.log('Found at index: ' + leftIndex);
  } else if (myArray[rightIndex] == numberToLookFor) {
    console.log('Found at index: ' + rightIndex);
  } else {
    console.log('Not found');
  }

})();
