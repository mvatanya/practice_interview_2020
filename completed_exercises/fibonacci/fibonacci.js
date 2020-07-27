//fib(n)= fib(n-1)+fib(n-2)
function fib(n){
  let dp = Array(n+1);
  dp[0]=0;
  dp[1]=1;
  for(let i=2; i<=n;i++){
     dp[i]=dp[i-1]+dp[i-2];
  }
  return dp[n]
}
console.log(fib(5)) 

//recursive way
function fib(n){
  if(n===1 || n===0) return 1
  return fib(n-1)+fib(n-2)
}



