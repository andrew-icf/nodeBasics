// COME BACK TO THIS
var D = ["able", "ale", "appple", "bale", "kangaroo"];
var S = "abppplee";

function largeInOrder(arr, word) {
  let currentWord;
  let result = [arr[0]];
  let queue = [];
  while(arr.length) {
    currentWord = arr.shift();
    console.log(currentWord.length)
      for(let i = 0; i < word.length; i++){
        for(let n = 0; n < currentWord.length; n++){
          console.log('current', currentWord[n]);
          console.log('word', word[i] )

          if(currentWord[n] === word[i]) {
            queue.push(currentWord[n]);
            word = word.slice(i);
            console.log('main word', word)
            // i++;
          }
          console.log('first', queue);
          console.log('main word again', word.length, currentWord.length)
        }
    }
    queue = Array(queue.join(''));
    console.log('ugh',queue, result)
    if(queue[0].length >= result[0].length){
      result.pop();
      result.push(queue.shift());
    } else {
      queue.shift();
    }
  }
  // return result.join();
}

// console.log('GOOGLE', largeInOrder(D, S));

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

// Linear Search *** Check if a value is in an array
function linearSearch(arr, val) {
  for(let i = 0; i < arr.length; i++) {
    if(val === arr[i]) return i;
  }
  return -1;
}
console.log('LINEARSEARCH ', linearSearch([1,5,6,4,48,9], 48));

// Binary Search *** remember it needs to be sorted
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length -1;
  let mid = Math.floor(end / 2);
  while(arr[mid] !== val && start <= end) {
    if(val < arr[mid]){
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === val ? mid : -1;
}
console.log('BINARYSEARCH ', binarySearch([1,5,6,47,48,50,54,61,68,90], 68));

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
  for (var i = 0; i < arr.length; i++) {
    let min = i;
    for (var n = i + 1; n < arr.length; n++) {
      if(arr[min] > arr[n]){
        min = n;
      }
    }
    if(i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
   return arr;
}
console.log('SELECTION ->', selectionSort([9,5,8,6,1,2,8,9,4]));

// Insertion Sort
function insertionSort(arr) {
  var currentVal;
  for(var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for(var n = i - 1; n >= 0 && arr[n] > currentVal; n--) {
      console.log('loop n = ', n)
      arr[n + 1] = arr[n];
    }
    console.log('outside of loop n = ', n)
    arr[n + 1] = currentVal;
  }
  return arr;
}

console.log('INSERTION ->', insertionSort([54, 26, 93, 17, 77, 31, 44, 55, 20]));

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
function merge(leftArr, rightArr) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  // if you don't want to concat on the slice'd arrays
  // while( leftIndex < leftArr.length){
  //   result.push(leftArr[leftIndex]);
  //   leftIndex++;
  // }
  // while(rightIndex < rightArr.length) {
  //   result.push(rightArr[rightIndex]);
  //   rightIndex++;
  // }
  // return result;
  return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}
const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log('MERGE ->',mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]

// The real QuickSort
function pivot(arr, start=0, end=arr.length-1) {
  let pivot = arr[start];
  let swapInd = start;

  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  for(let i = start+1; i < arr.length; i++) {
    if(pivot > arr[i]) {
      swapInd++;
      swap(arr, swapInd, i);
    }
  }
  swap(arr, start, swapInd);
  return swapInd;
}

function quickSort(arr, left=0, right=arr.length-1) {
  if(arr.length < 2) return arr;
  if(left < right) {
    let pivotInd = pivot(arr, left, right);
    quickSort(arr, left, pivotInd-1);
    quickSort(arr, pivotInd+1, right);
  }
  return arr;
}
console.log('QUICK ->', quickSort([5,8,6,4,1,2,2,3,3]));

// ************************************************************************************************************************                                      Quick Sort ES6 DO NOT USE THIS FOR YOUR INTERVIEW SINCE YOU ARE CREATING TWO ARRAYS, THIS SHOULD BE HANDLED IN PLACE ************************************************************************************************************************
// function quickSort(arr) {
//   if (arr.length <= 1) return arr;
//
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//
//   for(let i = 0; i < arr.length - 1; i++) {
//     if(arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }
// console.log('QUICK ->', quickSort([5,8,6,4,1,2,2,3,3]));

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









// function largeInOrder() {
//   let largest = null;
//   let words = [];
//   // while(D.length > 0) {
//     let j, i;
//     for(let i = 0; i < D.length; i++) {
//       console.log(D[i]);
//       for(j = 0; j < D[i].length; j++) {
//         console.log('j', D[i][j]);
//       }
//     }
//     for(let n = 0; n <= S.length; n++) {
//       console.log('S', S[n]);
//     }
//   //   D.length--;
//   // }
// }
// console.log(largeInOrder());
