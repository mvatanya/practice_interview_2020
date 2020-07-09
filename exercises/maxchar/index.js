// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let countCharObj = freqCounter(str)
  let maxValue = Math.max(...Object.values(countCharObj))
  let key = Object.keys(countCharObj).find(key => countCharObj[key] === maxValue)
  return key;
}

function freqCounter(str){
  let obj = {};
  for (let char of str){
    obj[char] ? obj[char]++ : obj[char] = 1;
  }
  return obj;
}
module.exports = maxChar;
