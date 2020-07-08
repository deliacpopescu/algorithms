//How do you find the missing number in a given integer array of 1 to 100?

function missingInteger(inputList) {
  // order array
  let outputList = [];
  for (let i = 1; i <= 100; i++) {
    let isInList = false;
    for (let j = 0; j <= inputList.length; j++) {
      if (i === inputList[j]) {
        isInList = true;
        break;
      }
    }
    if (!isInList) {
      outputList.push(i);
    }
  }
  return outputList;
}

const inputList = [
  1, 2, 3, 4, 5, 6, 8, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53,
  54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
  66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
  78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
  90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
];
console.log(missingInteger(inputList));
