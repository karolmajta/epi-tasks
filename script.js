var splitIntoPairs = function (s) {

};

console.log('splitIntoPairs("ff")');
console.log('oczekiwany: ' + ["ff"], 'jest: ' + splitIntoPairs('ff'));
console.log('splitIntoPairs("ffcc82aa")');
console.log('oczekiwany: ' + ["ff", "cc", "82", "aa"], 'jest: ' + splitIntoPairs('ffcc82aa'));


var arrayOfPairsIntoArrayOfBytes = function (arr) {
  return arr;
};

console.log('arrayOfPairsIntoArrayOfBytes(["ff"])');
console.log('oczekiwany: ' + [255], 'jest: ' + arrayOfPairsIntoArrayOfBytes(['ff']));
console.log('arrayOfPairsIntoArrayOfBytes(["ff"])');
console.log('oczekiwany: ' + [255, 204, 82, 170], 'jest: ' + arrayOfPairsIntoArrayOfBytes(['ff', 'cc', '82', 'aa']));