// Every time you do a loop you can do recursion instead but it doesn't work the other way around

let countDownFrom = (num) => {
  if (num === 0 ) return;
  countDownFrom(num -1);
}
console.log(countDownFrom(10));

function factorial(num) {
  if(num === 0 ) return 1;
  return num * factorial(num -1);
}
console.log('factorial', factorial(4));

function fibonacci(num){
  if (num === 0 || num === 1) return num;
  return fibonacci(num-1) + fibonacci(num-2);
}
console.log('fibonacci', fibonacci(8));

// with a second array
function recursiveReverse(arr) {
  let reverseArr = [];
  function addItems(orderedArr) {
    if(orderedArr.length > 0){
      reverseArr.push(orderedArr.pop());
      addItems(orderedArr);
    }
    return;
  }
  addItems(arr);
  return reverseArr;
}
console.log('recursiveReverse', recursiveReverse([8,2,5]));

// another simple recursion
function recurseLoop(n){
  console.log('n is at ', n);
  if (n <= 0) return "Done-zo";
  return recurseLoop(n - 1);
}
console.log(recurseLoop(3));

// O(2^n) Fib
function FibonacciExponential(num) {
  if(num <= 1) return  num;
  return FibonacciExponential(num - 2) + FibonacciExponential(num - 1);
}
console.log('FIB FIB', FibonacciExponential(8));

// O(n) recursive Fib with memoization
function fibMemoi(num) {
  var cache = {
    0: 0,
    1: 1
  };
  function recurse(isCached) {
    if(cache[isCached] === undefined) {
      cache[isCached] = recurse(isCached - 1) + recurse(isCached - 2)
    }
    return cache[isCached];
  }
  return recurse(num);
}
console.log('FibMemoied', fibMemoi(8));




// let s = "asdf-asdf-";
// let dashes = 0;
// for(let i = 0; i <= s.length; i++){
//   if (s.charAt(i) === '-') {
//     dashes++;
//   }
// }
// console.log(dashes);
