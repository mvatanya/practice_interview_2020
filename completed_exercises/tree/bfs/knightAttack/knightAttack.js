
/*
n*n, 
knight placed at (0,0)
return how many steps it takes to reach end point

pattern of the knight moves diagnolly

0,0 -> 1,2  2,1 

x 0 0 0 0 0
0 0 0 0 0 0
0 x 0 0 0 0
0 0 0 0 x 0
0 0 x 0 0 0
0 0 0 0 0 x
*/


function knightAttack(i, j){
  const directions = [
    [1, 2],
    [-1, 2],
    [-1, -2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1]
  ];

  const queue = [[0,0,0]]; //[coordx, coordy, level]
  const visited = new Map(); //how you store the coord as a key 

  while(queue.length>0){
    let node = queue.shift();
    let key = `${node[0]}_${node[1]}`;
    let level = node[2];
    if(!visited.has(key)){
      if(node[0]===i && node[1]===j) return level;
      directions.forEach(
        direction=>{
          let nexti = direction[0] + node[0];
          let nextj = direction[1] + node[1];
          if(nexti>=0 && nextj>=0 && nexti<=i && nextj<=j){
            queue.push([nexti,nextj,level+1]);
          }
        }
      )
    }
  }

  return -1;
}
// (0,0)
// (1,2)                       (2,1)
// (-1,1)(0,0) (2,4) (3,3)     (1,-1),(0,0),(3,3) (4,2)


console.log(knightAttack(5,5)) //4
console.log(knightAttack(1,2)) //1