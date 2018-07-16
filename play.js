function firstFactorial(num) {
  let total = 1;

  for (var i = 0; i < num; i++) {
    total = total * (num - i);
    console.log('total', total);
  }
   console.log(total);
}

firstFactorial(4);

function largestWord(str) {
  var splitStr = str.split(' ');
  var max = 0;
  var word;
  // one way - for loop
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > max) {
      max = splitStr[i].length;
      word = splitStr[i];
    }
  }
  console.log(word + ' is the longest word at ' + max + ' characters');

  // another way - sort (smallest code with only words coming back)
  var arr = str.match(/[a-z0-9]+/gi); // only characters a-z,0-9 stripping away punctuation (i flag means ignore case, + )
  var longestWord = splitStr.sort(function(a, b) {
    return b.length - a.length;
  });
  console.log(longestWord[0] + " is " + longestWord[0].length + " characters long.");

  // third way using reduce
  var bigWord = splitStr.reduce(function(longest, current) {
    return current.length > longest.length ? current : longest;
  }, '');// <- intitial value being reduced by
  console.log(bigWord);
}

largestWord('Well hello elephant asfdssdffeeer');

function reverseStr(str) {
  str = str.trim();
  var rev = str.split('').reverse().join('');
  console.log(rev);
}

reverseStr('Hello World      ');
