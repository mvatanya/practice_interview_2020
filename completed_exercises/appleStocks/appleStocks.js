function findMaxProfit(arr){
  let min = arr[0];
  let arrow = arr[1];
  let maxProfit = arrow - min;
  min = Math.min(min, arrow)
  for (let i = 2; i < arr.length; i++){
    arrow = arr[i]
    maxProfit = Math.max(maxProfit, (arrow-min))
    min = Math.min(min, arrow)
  }
  return maxProfit
}