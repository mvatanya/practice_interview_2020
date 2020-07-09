Array.prototype.myforEach = function(cb){
  let length = this.length;
  for (let i = 0; i < length; i++){
    cb(this[i], i, this)
  }
}

a=[1,2,3];
a.myforEach((ele, ind, arr) => {
  console.log(ele);
  console.log(ind);
  console.log(arr)
})

Array.prototype.myMap = function(cb){
  let length = this.length;
  let answerArray = []
  for (let i = 0; i < length; i++){
    answerArray.push(cb(this[i]))
  }
  return answerArray
}
a = [1,2,3]
a.myMap(ele => {
  return ele * 2
})



Array.prototype.myFilter = function(cb){
 let length = this.length;
 let newArray = [];
 for (let i = 0; i < length; i++){
   if(cb(this[i])){
    newArray.push(this[i])
   }
 }
 return newArray
}

a = [1,2,3,4]
a.myFilter(ele => {
return ele === 2})
// [3,4]