//How do you find the largest and smallest number in an unsorted integer array
//
function unsortedArray(inputList){
  let min, max;
  if(inputList[0]<inputList[1]){
    min=inputList[0];
    max=inputList[1];
  }else {
    min=inputList[1];
    max=inputList[0];
  }
  for(let i=0;i<inputList.length;i++){
    if(inputList[i]<min){
      min=inputList[i];
    }
    if(inputList[i]>max){
      max=inputList[i];
    }
  }
  console.log("min este "+min);
  console.log("max este "+max);
}

const inputList=[4,78,2,54,3,6];
  unsortedArray(inputList);