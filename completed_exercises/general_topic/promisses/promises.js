/*
1. if all the promises rejects, return a promise that rejects 0
2. otherwise, the returned promise should resolve the value of 
   the sum of all the values resolved by all promises 
*/
//@params promises = [promise1, promise2, promise3...]

function promiseHandler(...promises){
  let rejectedCount = 0
  let promiseValues = []
  let calculatePromisesArray = [];

  console.log(promises)
  for (let i of promises){
    calculatePromisesArray.push(i.then(value => promiseValues.push(value)).catch(e => rejectedCount++))
  }

  return Promise.all(calculatePromisesArray).then(() => {
    return promiseValues.reduce((a,b) => a+b);
  }).catch(() => {
    if (rejectedCount === promises.length) return Promise.reject(0);
  })
}


const promise1 = Promise.reject(1);
const promise2 = Promise.reject(2);
const promise3 = new Promise((resolve, reject) => {
  return reject(3)
});


promiseHandler(promise1, promise2, promise3).then(value=> {
  console.log({value});
}).catch((err) => console.log({err}))