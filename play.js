let s = "asdf-asdf-";
let dashes = 0;
for(let i = 0; i <= s.length; i++){
  if (s.charAt(i) === '-') {
    dashes++;
  }
}
var dash = s.match(/-/g).length;
console.log('dashes', dash);

// Return the factorial from a number
function firstFactorial(num) {
  let total = 1;

  for (var i = 0; i < num; i++) {
    total = total * (num - i);
  }
   console.log(total);
}
firstFactorial(8);

function recursiveFactorial(num) {
  if (num === 0) return 1;
  return num * recursiveFactorial(num - 1); // remember you have to return your function otherwise it will be undefined
}
console.log(recursiveFactorial(8));

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
  var arr = str.match(/[a-z]+/gi); // only characters a-z stripping away punctuation (i flag means ignore case, + )
  var longestWord = arr.sort(function(a, b) {
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
  let result = sen.toLowerCase().replace(/[^a-z]/g, '') // ^ requiring a match to occur at the beginning of a line
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

// Capitializing the first letters in a string
function cap(str) {
  var wordarr = str.split(" ");

  for (var i = 0; i < wordarr.length; i++) {
   wordarr[i] = wordarr[i][0].toUpperCase() + wordarr[i].slice(1);
  }
  str = wordarr.join(" ");

  console.log(str);
}

cap('dancing again');

// certain characters are in correct positions
function char(str) {
  // pad the strings so that if a character exists at the beginning
  // of the string for example, we don't get on out-of-bounds error by
  // trying to get the character before it
  // if(str.charAt(0).match(/[a-z]/i)) return false;
  // if(str.charAt(str.length - 1).match(/[a-z]/i)) return false;
  var str = '=' + str + '=';

  // loop through entire string
  for (var i = 0; i < str.length; i++) {

    // check to see if current character is an alphabetic character
    // by using a simple case-insensitive regex pattern
    if (str[i].match(/[a-z]/i) !== null) {

      // check to see if a + symbol is to the left and right
      // if not, then we know this string is not valid
      if (str[i-1] !== '+' || str[i+1] !== '+') {
        // return false;
        console.log(false);
      }

    }

  }
  console.log(true);
  // return true;
}
char('+s=+a+');
// which number is bigger
function checkNums(num1,num2) {

    if (num2 > num1) {
        console.log(true);
    } else if (num1 === num2) {
        console.log('-1');
    } else {
        console.log(false);
    }

}
checkNums(8,8);

// you can create a closure to keep the value passed to the function createBase even after the inner function is returned
function createBase(base) {
  return function(N) {
    console.log(base + N);
  }
}
var addSix = createBase(6);
addSix(6);

// use a closure to create a private counter
function counter() {
  var count = 0;
  function add(increment) { return count += increment;}
  function retrieve() {console.log('The count is at ' + count);}

  return {
    add: add,
    retrieve: retrieve
  }
}
// usage of our counter function
var c = counter();
c.add(5);
c.add(15);
c.retrieve();

function timeDiff() {
  var diff = Math.abs(new Date('2017/10/09 12:00') - new Date('2017/10/09 00:00'))
  var min = Math.floor((diff/1000)/60);
  var hours = min / 60;
  console.log(min, hours);
}
timeDiff();

// take in minutes and return hours : minutes
function convertToHours(num) {
  // var hours = Math.floor(num / 60);
  // var minutes = num % 60;
  // console.log('convert to hours ' + hours + ":" + minutes);
  // OR
  console.log('convert to hours ' + Math.floor(num / 60) + ":" + (num % 60));
}
convertToHours(120);

// Alphabet Soup - sort a string
function charSort(str) {
  // no special characters
  // console.log(str.split('').sort().join(''));
  // possible special characters
  str = str.trim();
  var letters = str.match(/[a-z]/gi);
  var sorted = letters.sort().join('');
  console.log(sorted);
}
charSort('ferzsoaqwa');
// Kaprekar's Constant
function KaprekarsConstant(num) {
    let count = 0;
    while(num !== 6174){
      var numbers = num.toString().split('').sort();

      var ascending = parseInt(numbers.join(''));
      var descending = parseInt(numbers.reverse().join(''));

      while(descending.toString().length < 4){
        descending *= 10;
      }
      num = Math.abs(ascending - descending);

      count++;
      if(count > 999) break;
    }
    console.log(count, num);
}
KaprekarsConstant(3524);

function strPattern(str) {
  str = str.trim();
  var letters = str.match(/[a-z?]/gi);
}

function questionMarks(str) {
  str = str.trim();
  // grab all patterns of letters and ?'s in between two digits
  let matches = str.match(/\d[\w\?]*?\d/g);
  if (!matches) console.log(false);
  let result = false;
  for(let match of matches){
    // do the outside numbers equal 10
    if(Number(match[0]) + Number(match[match.length -1]) === 10) {
      // count the ?'s
      if(match.split('').filter(char => char ==='?').length === 3){
        result = true;
      } else {
        result = false;
      }
    }
  }
  console.log(result);
}

questionMarks("asdf7s???s4d8s???a2");

// nested array O(n^2)
function hasDupes(array) {
  for(var i = 0; i < array.length; i++) {
    for (var n = 0; n < array.length; n++) {
      if(i !== n && array[i] === array[n]){
        return true;
      }
    }
  }
  return false;
}
hasDupes([1,2,1]);

// is a faster algorithm than above at O(n)
function hasDupes2(array) {
  var existingItems = [];
  for (var i = 0; i < array.length; i++) {
    if(existingItems[array[i]] === undefined){
      // console.log(array[i]);
      existingItems[array[i]] = 1;
      // console.log(existingItems);
    } else {
      console.log(true);
    }
  }
  console.log(false);
}
hasDupes2([0,3,8, 8]);

function KaprekarsConstant(num) {
    let count = 0;
    while (num != 6174) {
        let numArray = num.toString().split('').sort();
        let ascending = parseInt(numArray.join(''));
        let descending = parseInt(numArray.reverse().join(''));
        while (descending.toString().length < 4) {
            descending *= 10;
        }
        num = Math.abs(ascending - descending);
        count++;
        if (count > 999) break;  // failover
    }
    return count;
}
KaprekarsConstant(6542);

// grab this format ADS, H.
function reggie(str) {
  str = str.trim();
  var match = str.match(/[a-z]{0,3}[, .]/gi).join('');
  console.log(match);
}

reggie('asdfADS, H.asdf')

// digits on either side of 3 ?'s that add to 10
function QuestionsMarks(str) {
    str = str.trim();
    var patterns = str.match(/\d[\w\?]*?\d/g);
    if(!patterns) return false;
    let result = false;
    for(let pattern of patterns) {
        if(Number(pattern[0]) + Number(pattern[pattern.length - 1]) === 10 ) {
            if(pattern.split('').filter(char => char === '?').length === 3 ) {
                result = true;
            } else {
                result = false;
            }
        }
    }
    console.log(result);
}

QuestionsMarks("asdf7s???s4d8s???a2");

function greaterNum(a, b) {
  if(b >a) {
    console.log(true);
  } else if ( a === b) {
    console.log("-1");
  } else {
    console.log(false);
  }
}
greaterNum(20,20);

// Capitalize beginning letter of every word
function LetterCapitalize(str) {
    var word = str.split(' ');
    // console.log(word);
    for(var i = 0; i < word.length; i++) {
      // console.log(word[i]);
        word[i] = word[i][0].toUpperCase() + word[i].slice(1);
    }
    str = word.join(' ');
    console.log(str);

}
LetterCapitalize('hello word again');

// return true if a string has the letter a followed by 3 spaces and then a b or vice versa
function ABcheck(str) {
  // one REGEX
  let match = str.match(/[aA].{3}[bB]/) !== null;
  // another REGEX
  let pattern = /(a...b|b...a)/
  let result = pattern.test(str);
  console.log(match);
}
ABcheck("lane eborrowed");

function vowelCount(str) {
  if(str.length < 0) return;
  str = str.trim();
  let vowels = str.match(/a|e|i|o|u/gi).length;
  return vowels;
}
console.log(vowelCount('asdfesdiAAAuosuu'));

function wordCount(str) {
  str = str.trim();
  if ( str.length > 0 ) {
    return str.split(' ').length;
  } else {
    return 0;
  }
}
console.log(wordCount('I really like clean code      '));

function ExOh(str) {
  // regex!!!
  str = str.trim();
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  let xlen = str && x ? x.length : 0;
  let olen = str && o ? o.length : 0;
  return xlen === olen;
  // loop
  // str = str.trim();
  // let arr = str.split('');
  // let o = [];
  // let x = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === 'x') {
  //     x.push(arr[i])
  //   } else {
  //     o.push(arr[i]);
  //   }
  // }
  // return o.length === x.length;
}

console.log(ExOh('xxxooo'));

function palindrome(str){
  str = str.trim().replace(/ /g, '');
  let middle = Math.ceil(str.length / 2);
  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[(str.length - i) - 1]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome('dont nod'));

let myObj = {};
myObj['firstName'] = 'Boom';
myObj['age'] = 32;
console.log(Object.keys(myObj));
console.log(Object.values(myObj));
console.log(Object.entries(myObj));
console.log(myObj.hasOwnProperty('age'));

// -------- MEMOIZATION
function times10(num) {
  return num * 10;
}

const memoization = () => {
  const cache = {};
  return (n) => {
    if( n in cache ){
      console.log('Pulling from cache... ');
      return cache[n];
    } else {
      console.log('Doing the work...')
      let result = times10(n);
      cache[n] = result;
      return result;
    }
  }
  console.log('cache ', cache);
}
const newMultiply = memoization();
console.log(newMultiply(5));
console.log(newMultiply(5));

function ArithGeo(arr)  {
  if (arr.length < 2) return -1;
  var diff = arr[1] - arr[0];
  var prod = arr[1] / arr[0];
  // code goes here
  var isArith = function(arr) {
    for (var i = 1; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] !== diff) return false;
    }
    return true;
  };

  var isGeo = function(arr) {
    for (var i = 1; i < arr.length - 1; i++) {
      if (arr[i + 1] / arr[i] !== prod) return false;
    }
    return true;
  };

  if (isArith(arr)) return "Arithmetic";
  else if (isGeo(arr)) return "Geometric";
  else return -1;
}

console.log(ArithGeo([5,10,15,20]));
console.log(ArithGeo([2,6,18,54]));

function wordSplosion(str) {
  if (typeof str !== 'string') {
    return "Please enter a string";
  } else {
    let result = '';
    for (let i = 0; i <= str.length; i++) {
      result += str.substring(0, i);
    }
    return result;
  }
}
console.log('wordSplosion', wordSplosion('Code'));
// ***** REMEMBER that recursion works it's way down and then builds up after hitting the base case
// Break down to base case Cod => Co => C => Code(str)
// Building it back C => Co => Cod => Code = CCoCodCode
function wordSplosionRecursion(str) {
  if(typeof str !== 'string') {
    return "Please enter in a string";
  } else {
    if (str.length === 0) return str;
    return wordSplosionRecursion(str.substring(0, str.length -1)) + str;
  }
}
console.log('Splosion Recursion', wordSplosionRecursion('Code'));

function maxSpan(arr) {
  let iIndex;
  let first = arr[0];
  let last = arr[arr.length - 1];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === first || arr[i] === last) {
      iIndex = i;
    }
  }
  return iIndex;
}
console.log('maxSpan', maxSpan([1,6,9,8,2,4,5,6]))

function withoutString(str1, str2) {
  let reg = new RegExp(str2, 'g');
  let result = str1.replace(reg, '');
  return result;
}
console.log('WithoutString', withoutString('Hello there', 'e'));

function sumOfNumbers(str) {
  let result = 0;
  let numArr = str.match(/[0-9]+/g);
  // let intArr = numArr.map(function(num) {
  //   return +num;
  // });
  // let recurse = function(array) {
  //   return (array.length === 0) ? 0 : array[0] + recurse(array.slice(1));
  // }
  // recurse(intArr);
  for(let i = 0; i < numArr.length; i++) {
    result += +numArr[i];
  }
  return result;
}
console.log('SumOfNumbers', sumOfNumbers('asd25a2sdf75'));

const anagramWords = ['map', 'art', 'how', 'rat', 'tar', 'who', 'pam', 'shoop']; // Input
// const output = {
//   key1: ["map", "pam"],
//   key2: ["art", "rat", "tar"],
//   key3: ["shoop"],
//   key4: ["how", "who"]
// }
function anagram(anagramWords) {
  const anagrams = {};
  anagramWords.forEach((word) => {
      let sortedWord = alphabetize(word);
      if(!anagrams[sortedWord]) {
        return anagrams[sortedWord] = [word]; // anagrams = {'amp' : ['map'] }
      }
      anagrams[sortedWord].push(word); // ES6 arrow function has an implicit return
      // anagrams = { 'amp' : ['map', 'pam'] }
  });
  return anagrams;
}
function alphabetize(word) {
  if(!word) return;
  return word.split('').sort().join('');
}
console.log('anagram', anagram(anagramWords));



function arrayAddition(arr) {
  let result = 0;
  let largest = Math.max.apply(Math, arr);
  let index = arr.indexOf(largest);
  let indexRemoval = arr.splice(index, 1);
  for(let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result === largest;
}
console.log('ArrayAddition', arrayAddition([1,2,3,6]));

function canBalance(arr) {
  let len = arr.length;
  while(len > 0) {
    let arrLeft = arr.slice(0, len - 1);
    let arrRight = arr.slice(len - 1);
    let leftTotal = 0;
    let rightTotal = 0;
    for(let i = 0; i < arrLeft.length; i++){
      leftTotal += arrLeft[i];
    }
    for(let i = 0; i < arrRight.length; i++) {
      rightTotal += arrRight[i];
    }
    if (leftTotal === rightTotal) {
      return true;
    } else {
      len--;
    }
  }
  return false;
}
console.log('CanBalance', canBalance([1,2,1,1,1]));

function charCount(str) {
   str = str.toLowerCase();
   let charObj = {};
   let chars = str.match(/[a-z0-9]/g);
   chars.forEach((char) => {
     charObj[char] > 0 ? charObj[char]++ : charObj[char] = 1;
   });
   return charObj;
 }
console.log('CHARCOUNT', charCount('aaAAssf 3 6 2 #$@ a4    '));

function letterCount(str) {
  var words = str.replace(/[^A-Za-zs]/g, '').split(/s+/);

  var counts = words.map(function(word) {
    word = word.toLowerCase();
    var letters = [];
    for (letter of word) {
      if (letters[letter]) {
        letters[letter] += 1;
      } else {
        letters[letter] = 1;
      }
    }
    return letters;
  });

  var greatestCounts = counts.map(function(word) {
    var greatest = 0;
    for (letter in word) {
      if (word[letter] > greatest) {
        greatest = word[letter];
      }
    }
    return greatest;
  });

  var greatest = Math.max.apply(null, greatestCounts);
  if (greatest <= 1) return -1;
  return words[greatestCounts.indexOf(greatest)];
}
console.log('LETTER-COUNT', letterCount('coderbyte is cool'));

function dashInsert(str) {
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] % 2 === 1 && arr[i+1] % 2 === 1) {
            arr.splice(i+1, 0, "-");
        }
    }
    return arr.join('');
}
console.log('DASHINSERT ',dashInsert('999435'));

function stringPermutation(str) {
  if(str.length < 2) return str;
  let results = [];
  for(let i = 0; i < str.length; i++) {
    let firstChar = str[i];
    let remainingChars = str.substring(0,i) + str.substring(i+1);
    let innerPermutations = stringPermutation(remainingChars);
    for(var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}
console.log('STRINGPERMUTATION ', stringPermutation('ab'));
