function grabString(str1, str2){
  var reg = new RegExp(str2, 'g');
  var result = str1.replace(reg, '');
  return result;
}
console.log('grabString', grabString('Hello There', 'e'));
// COME BACK TO THIS
var D = ["able", "ale", "apple", "bale", "kangaroo"];
var S = "abppplee";

function largeInOrder() {
  let largest = null;
  let words = [];
  for(let i = 0; i < D.length; i++) {
    for(let j = 0; j < D[i].length; j++){
      console.log('j',D[i][j]);
    }
  }
  for(let n = 0; n <= S.length; n++) {
    console.log('S', S[n]);
  }
}
console.log(largeInOrder());
// Builds out a Node Tree - FUN FUN FUNCTION
let categories = [
  {id: 'animals', 'parent': null},
  {id: 'mammals', 'parent': 'animals'},
  {id: 'cats', 'parent': 'mammals'},
  {id: 'dogs', 'parent': 'mammals'},
  {id: 'chihuahua', 'parent': 'dogs'},
  {id: 'sammoyed', 'parent': 'dogs'},
  {id: 'persian', 'parent': 'cats'},
  {id: 'siamese', 'parent': 'cats'}
]

let makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter(c => c.parent === parent)
    .forEach(c =>
      node[c.id] = makeTree(categories, c.id))
  return node;
}

console.log(
  JSON.stringify( makeTree(categories, null), null, 2 ));

// ANSWER
// {
//   "animals": {
//     "mammals": {
//       "cats": {
//         "persian": {},
//         "siamese": {}
//       },
//       "dogs": {
//         "chihuahua": {},
//         "sammoyed": {}
//       }
//     }
//   }
// }

// Bubble Sort
function bubbleSort(arr) {
  // controls pass throughs
  for(var i = arr.length - 1; i >= 0; i--) {
    // comparisons
    for (var n = 1; n <= i; n++) {
      if(arr[n-1] > arr[n]) {
        // swaps
        var temp = arr[n-1];
        arr[n-1] = arr[n];
        arr[n] = temp;
      }
    }
  }
  console.log('BUBBLE ->', arr);
}
bubbleSort([2,5,8,6,1,4,3,7]);

function bubs(arr) {
  let wall = arr.length;
  while( wall >= 0 ) {
    for(let i = 0; i < wall; i++) {
      if(arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    wall--;
  }
  return arr;
}
console.log('SECONDBUBBLE ->', bubs([2,5,8,6,1,4,3,7]));

function selectionSort(arr) {
  var minIndex, temp;
  for (var i = 0; i < arr.length; i++) {
    minIndex = i;
    for (var n = i + 1; n < arr.length; n++) {
      if(arr[n] < arr[minIndex]){
        minIndex = n;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log('SELECTION ->', arr);
}
selectionSort([9,5,8,6,1,2,8,9,4]);

// Insertion Sort
function insertionSort(arr) {
  var element, n;
  for(var i = 0; i < arr.length; i++) {
    element = arr[i];
    for(var n = i - 1; n > -1 && arr[n] > element; n--) {
      arr[n + 1] = arr[n];
    }
    arr[n + 1] = element;
  }
  console.log('INSERTION ->', arr);
}
insertionSort([54, 26, 93, 17, 77, 31, 44, 55, 20]);

// Merge Sort
// Split the array into halves and merge them recursively
function mergeSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return merge( mergeSort(left), mergeSort(right) );
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log('MERGE ->',mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]

// Quick Sort ES6
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log('QUICK ->', quickSort([5,8,6,4,1,2,2,3,3]));

function ArrayAddition(arr) {
  let added = 0;
  let max = Math.max(...arr);
  let maxIndex = arr.indexOf(max);
  let maxRemoved = arr.splice(maxIndex, 1);
  for (let i = 0; i < arr.length; i++) {
    added += arr[i];
  }
  return added === max ? true : false;
}

console.log(ArrayAddition([1,2,3,6]));

// increment numbers to what's passed in and add them together
function fasterAddition(num) {
  // faster than looping through
  //      6  * (6+1)     / 2 = 21
  return num * (num + 1) / 2;
}
console.log(fasterAddition(6));

// MEMOIZATION

// -> a simple function to add something
const add = (n) => (n + 10);
console.log(add(9));

// -> a simple memoized function to add something
const memoizedAdd = () => {
  let cache = {};
  return (n) => {
    if (n in cache) { // cache will remember it's values since the returned function has a closure over it
      console.log('Fetching from cache');
      return cache[n];
    } else {
      console.log('Calculating result');
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  }
}

const newAdd = memoizedAdd();
console.log(newAdd(4)); // calculated
console.log(newAdd(4)); // cached
