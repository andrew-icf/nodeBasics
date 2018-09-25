// Every time you do a loop you can do recursion instead but it doesn't work the other way around
// simple recursion countdown ES5
function recurseLoop(n){
  if (n <= 0) return "Done-zo";
  // console.log('n is at ', n);
  return recurseLoop(n - 1);
}
console.log('Countdown ES5', recurseLoop(3));

// ES6
let countDownFrom = (num) => {
  if (num === 0 ) return 'Done';
  // console.log(num);
  return countDownFrom(num -1);
}
console.log('Countdown', countDownFrom(10));

// with a second array reverse an array with recursion
function recursiveReverse(arr) {
  let reverseArr = [];  // set up
  function addItems(orderedArr) {
    if(orderedArr.length > 0){  // BASE CASE
      reverseArr.push(orderedArr.pop()); // Last one popped will be first one on (Stack)
      addItems(orderedArr); // recurse
    }
    return;
  }
  addItems(arr); // first call to perform recurse
  return reverseArr;
}
console.log('recursiveReverse', recursiveReverse([1,2,3,4,5]));
// O(n)
function factorial(num) {
  if(num <= 1) return 1;
  return num * factorial(num -1);
}
console.log('factorial', factorial(4));

// O(2^n) Fib
function FibonacciExponential(num) {
  if(num <= 1) return  num;
  return FibonacciExponential(num - 2) + FibonacciExponential(num - 1);
}
console.log('FIB', FibonacciExponential(8));

// O(n) recursive Fib with memoization
function fibMemoi(num) {
  var cache = {
    0: 0,
    1: 1
  };
  function recurse(cacheKey) {  // Don't for get to return your recursive funciton
    if(cache[cacheKey] === undefined) {
      cache[cacheKey] = recurse(cacheKey - 1) + recurse(cacheKey - 2)
    }
    return cache[cacheKey];
  }
  return recurse(num);
}
console.log('FibMemoied', fibMemoi(8));

// recursion of string reversal
function recurseReverseStr(str) {
  let revArr = [];
  let strArr = str.split('');
  function recurse(strArr) {
    while (strArr.length !== 0) {
      revArr.push(strArr.pop());
    }
    return revArr.toString().replace(/,/g, '');
  }
  return recurse(strArr);
}
console.log(recurseReverseStr('fdsa'));

// second solution to recursive reverse a string
function reverseAgain(str) {
  if(str.length === 0) return '';// substr() is being depracted use substring(start index, end index) , if one value it will go from that value to the end of the string
  return str[str.length -1] + reverseAgain(str.substring(0, str.length-1));
}
console.log('second string reverse', reverseAgain('fdsa'));

// flatten an array
function flattenArray(arr) {
  let result = [];
  arr.forEach(function(index) {
    if(!Array.isArray(index)) {
      result.push(index);
    } else {
      result = result.concat(flattenArray(index));
    }
  });
  return result;
}
console.log('Flatten', flattenArray([1,[2],[3,[4]]]));

// Take two numbers and find the greatest common divisor
// Euclid's Algorithm
function gcdEuclid(num1, num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  if(max % min === 0) return min;
  else return gcdEuclid(min, max % min);
}
console.log('Euclid GCD', gcdEuclid(14, 28));

// Dijkstra's Algorithm
function gcdDijkstra(num1, num2) {
  if(num1 === num2) return num1;
  else if (num1 > num2) return gcdDijkstra(num1-num2, num2);
  else return gcdDijkstra(num1, num2-num1);
}
console.log('Dijkstra GCD', gcdDijkstra(14, 49));

// Using helper functions for recursion when dealing with scope issues
function collectOddValues(arr) {
  let result = [];

  function helper(helperArr) {
    if(helperArr.length === 0) return;
    if(helperArr[0] % 2 !== 0) {
      result.push(helperArr[0]);
    }
     helper(helperArr.slice(1));
  }
  helper(arr);
  return result;
}
console.log('COLLECTODDS', collectOddValues([1,2,3,4,5,6,7]));

// pure recursive call of collectOddValues
function collectOddValuesPure(arr) {
  let newArr = []; // this will be defined as a new array each time through which is ok here due to concatenating the arrays at the end
  if(arr.length === 0) return newArr;
  if(arr[0] % 2 !== 0){
    newArr.push(arr[0])
  }
  newArr = newArr.concat(collectOddValuesPure(arr.slice(1))); // every recursion will concat all the arrays with only odds
  return newArr;
}
console.log('COLLECTODDS-PURE', collectOddValuesPure([1,2,3,4,5,6,7]));

function power(base, exp){
  if(exp === 0) return 1;
  return base * power(base, exp-1);
}
console.log('POWER', power(4));

function productOfArray(arr) {
  if(arr.length <= 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}
console.log('PRODUCTOFARRAY', productOfArray([1,2,3,10]));


// pure recursion tips to put in notes ***************************************
// for arrays you can use methods like slice, concat, and the spread operator so that you make copies of the arrays without mutating them
// strings are immutable so you will need to use methods like slice or substring to make copies of them
// to make copies of OBJECTS use Object.assign or the spread operator

function depthFirstSearch(root) {
  let result = [];
  let visited = {};

  function helper(neighbor) {
    if(neighbor === 0) return;
    if(!visited[neighbor]) {
      visited[neighbor] = true;
      result.push(neighbor);
    }
  }
  return result;
}
