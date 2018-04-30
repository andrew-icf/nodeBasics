// Every time you do a loop you can do recursion instead but it doesn't work the other way around

// let countDownFrom = (num) => {
//   if (num === 0 ) return;
//   console.log(num);
//   countDownFrom(num -1);
// }

// var countDownFrom = function(num) {
//   if (num === 0 ) {
//     return;
//   }
//   console.log(num);
//   countDownFrom(num - 1);
// }

// countDownFrom(10);

// Builds out a Node Tree

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


// let s = "asdf-asdf-";
// let dashes = 0;
// for(let i = 0; i <= s.length; i++){
//   if (s.charAt(i) === '-') {
//     dashes++;
//   }
// }
// console.log(dashes);
