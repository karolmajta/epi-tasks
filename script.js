(function () {
  'use strict';

  var myArray = [1, 8, 12, 2, 33, 4, 9, 10, 22, 8, 12, 128, -2, 33];
  var numberToLookFor = 12;
  var atIndex = null; // we didnt find the number yet
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] == numberToLookFor) {
      atIndex = i;
      console.log('Found at index: ' + atIndex);
      break;
    }
  }
  if (atIndex === null) {
    console.log('Not found');
  }

})();
