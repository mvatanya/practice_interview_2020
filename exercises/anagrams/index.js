// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if(stringA.length !== stringB.length) return false;

  let stringACount = freqCounter(stringA);
  let stringBCount = freqCounter(stringB);

  for (let i in stringACount){
    if (stringACount[i] !== stringBCount[i]){
      return false
    }
  }
  return true;
}

function freqCounter(str){
  let obj = {};
  for (let i of str){
    obj[i] ? obj[i]++ : obj[i] = 1;
  }
  return obj;
}
module.exports = anagrams;
