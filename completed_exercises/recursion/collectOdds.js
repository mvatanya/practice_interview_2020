function collectOdds(arr, result=[]){
  if(arr.length === 0) return result;
  let ele = arr.pop();
  if(ele%2 !== 0){
      result.push(ele)
  }
  return collectOdds(arr, result)
}


// using helper

// function collectOdds(arr){
//   function helper(ele){

//   }
// }