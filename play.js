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
  console.log(str.split('').sort().join(''));
  // possible special characters
  str = str.trim();
  var letters = str.match(/[a-z]/gi);
  var sorted = letters.sort().join('');
  console.log(sorted);
}
charSort('ferzsoaqwa');
// Kaprekar's Constant
function getKapped(num) {
    var str = num.toString();
    var numbers = str.match(/[0-9]/g).sort().join('');
    var reverse = numbers.split('').reverse().join('');
    var sortNum = parseInt(numbers);
    var revNum = parseInt(reverse);
    var str = Math.abs(sortNum - revNum);



  console.log(str);
}
getKapped(8792);

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
