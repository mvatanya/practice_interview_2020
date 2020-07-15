//http://curric.rithmschool.com/r12/assessments/react-2-dbe6/
/**
 * input => 
  const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
  [9, 10, 11, 12]
  [13, 14, 15, 16]
];
* expected output =>
  [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
*/

function unroll(squareArray) {
  let digitCounts = squareArray.length * squareArray.length
  let answer = [];

  let topBoundaryPosition = 0;
  let rightBoundaryPosition = squareArray.length - 1
  let bottomBoundaryPosition = squareArray.length - 1
  let leftBoundaryPosition = 0;
  while (answer.length < digitCounts ) {

    //Going right direction
    for (let i = topBoundaryPosition; i <= rightBoundaryPosition; i++) {
      answer.push(squareArray[topBoundaryPosition][i])
    }
    topBoundaryPosition++;

    //Going down direction
    for (let j = topBoundaryPosition; j <= bottomBoundaryPosition; j++) {
      answer.push(squareArray[j][rightBoundaryPosition])
    }
    rightBoundaryPosition--;

    //Going left direction
    for (let k = rightBoundaryPosition; k >= leftBoundaryPosition; k--) {
      answer.push(squareArray[bottomBoundaryPosition][k])
    }
    bottomBoundaryPosition--;
    //Going up direction
    for (let l = bottomBoundaryPosition; l >= topBoundaryPosition; l--) {
      answer.push(squareArray[l][leftBoundaryPosition])
    }
    leftBoundaryPosition++;
    //When finish each cycle
    
    
  }
  return answer
}

module.exports = unroll;
