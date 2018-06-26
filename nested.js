var creditCards = ["9514-7532-6582-9966", "3219-4458-8857-8565", "6548-7532-9875-9966", "3219-9999-8857-8565", "8877-9865-6582-9966", "3219-3211-1144-8565"];
var filteredArray = [];

function big() {
  for(let i = 0; i < creditCards.length; i++) {
    var sum = 0;
    var card = creditCards[i].replace(/[-]/g, "");
    for(var y = 0; y < card.length; y++) {
      sum += parseInt(card[y]);
    }
    filteredArray.push(sum);
  }
    console.log(filteredArray);
    indexOfArray(filteredArray);
}

function indexOfArray(arr) {
  if (arr.length === 0) {
    return -1;
  }
  var max = arr[0];
  var maxIndex = 0;

  for(var i = 1; i < arr.length; i++){
    if(arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }
  console.log('maxIndex', maxIndex);
  console.log('max', max);
}

big();

// Don't forget about map, filter, reduce
// function bigAgain(){
//   let filteredArray = creditCards.map(card => {
//     return card.replace(/[-]/g, "");
//   });
// }

// let str = 'Mary and John only like to go out with Mary and John';
// function evenNames () {
//   let mary = (str.match(/John/g)).length;
//   let john = (str.match(/Mary/g)).length;
//   let count = mary + john;
//   if (count % 2 === 0){
//     console.log('true');
//   } else {
//     console.log('need more mary\'s or john\'s');
//   }
// }
// evenNames();
