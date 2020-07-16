/*
You are planning to rob houses on a specific street, 
and you know that every house on the street has a certain amount 
of money hidden. The only thing stopping you from robbing all of them 
in one night is that adjacent houses on the street have a connected security system. 
The system will automatically trigger an alarm if two adjacent houses are broken 
into on the same night.Given a list of non-negative integers nums representing the 
amount of money hidden in each house, determine the maximum amount of money 
you can rob in one night without triggering an alarm.

For input = [1, 1, 2], the output should be ==> 2
incl 1, excl 0
max 1, incl 1+1 = 2, excl=1
max 2, incl 1+2 =3, exl=2

For input = [4,2,13,15,15,1], the output should be ==> 32



//incl = 4, excl = 0  
//max(incl(prev),excl(prev)) 4, incl = excl(prev)+2, excl=max= 4
//max 4, incl = excl(prev)+13=17, excl=max=4
//max 17, incl = 4 + 15, excl=17
//max 19, incl = 15 + 17, exc=19
//max 32, incl = 1 + 19, exc=32
Math.max(incl,excl); 
*/

function houseRobber(arr){
  let max ;
  let incl = arr[0];
  let excl = 0
  for (let i = 1; i < arr.length; i++){
    max = Math.max(incl, excl)
    incl = excl + arr[i];
    excl = max
  }
  return Math.max(incl, excl)
}
console.log(houseRobber(
  
))

