//How do you find all pairs of an integer array whose sum is equal to a given number

function pairs(inputList,number){
  for(let i=0;i<inputList.length;i++){
    for(let j=1;j<inputList.length;j++){
      let sum = inputList[i]+inputList[j];
      if(sum===number){
        console.log("the pairs are:"+inputList[i]+ " & "+inputList[j]);
      }
    }
  }
}
const inputList=[1,2,3,4,5,6,7];
pairs(inputList,8);
