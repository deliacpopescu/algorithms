//How do you find the duplicate number on a given integer array?
//[1,2,7,4,6,3,6,3,7,8,9]
function findDuplicate(inputList) {
  for (let i = 0; i < inputList.length; i++) {
    for (let j = 0; j < inputList.length - 1; j++) {
      if (inputList[j] > inputList[j + 1]) {
        let c = inputList[j];
        inputList[j] = inputList[j + 1];
        inputList[j + 1] = c;
      }
    }
  }
  //return inputList;
  console.log(inputList);
  let duplicate = 1;
  for (let i = 0; i < inputList.length; i++) {
    if (inputList[i] === inputList[i + 1]) {
      duplicate++;
    }
    if (inputList[i] !== inputList[i + 1] && duplicate !== 1) {
      console.log(inputList[i] + " apare de " + duplicate);
      duplicate = 1;
    }
  }
}

const inputList = [1, 2, 3, 4, 2, 3, 4, 5, 1, 7, 3, 6, 9, 9, 9, 9];
findDuplicate(inputList);
