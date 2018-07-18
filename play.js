// Return the factorial from a number
function firstFactorial(num) {
  let total = 1;

  for (var i = 0; i < num; i++) {
    total = total * (num - i);
  }
   console.log(total);
}
firstFactorial(4);

// Return the largest word in a string
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

// Reverse a string
function reverseStr(str) {
  str = str.trim();
  var rev = str.split('').reverse().join('');
  console.log(rev);
}
reverseStr('Hello World      ');

// Return back what position a letter is in the alphabet
function alphabetPosition(sen) {
  let result = sen.toLowerCase().replace(/[^a-z]/g, '')
        .replace(/./g, ([c]) => ' ' + (c.charCodeAt(0) - 'a'.charCodeAt(0) + 1))
        .substr(1);
  console.log(result);
}
alphabetPosition("TKdos");

// replace every letter in the string with the letter follows it in the alphabet if vowel capitalize it
function letterChange(str) {
  var changed = str.replace(/[a-z]/gi, function(char) {
    return char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt()+ 1);
  });

  var cap = changed.replace(/a|e|i|o|u/g, function(vowel) {
    return vowel.toUpperCase();
  });
  console.log(cap);
}
letterChange('bcdz')

// adding numbers from 1 to a certain value
function addTo(num) {
  let start = 0;
  for (let i = 0; i <= num; i++) {
    start += i;
  }
  console.log('adding to ', start);
}
addTo(8);
