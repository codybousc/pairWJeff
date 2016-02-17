//Eloquent Javascript

var array = [1, 2, 3];

function arrayToList(array) {
  var list = null;

  for(var i = array.length - 1; i >= 0; i--) {
    console.log(list);
    list = {value: array[i], rest: list};
    console.log(list);
  }
  return list;
}

// 1st iteration: list = {value: 3, rest: null}
// 2nd iteration list = { value: 2, rest: {value: 3, rest: null}}
// 3rd iteration list ={ value: 1, rest: { value: 2, rest: {value: 3, rest: null}}}


var testList = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};


function listToArray(list) {
  var array = [];
  for(var node = list; node; node = node.rest ) {
    array.push(node.value);
  }
  return array;
}

//

listToArray(testList);

// console.log(listToArray(list));

// ************************************************************************************ //
// Free Code Camp
//Reverse a string
var string ="epicodus";
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

//Factorialize a number
function factorialize(num) {
  var result = 1;
  for(var i = 1; i <= num; i++) {
  	result *= i;
  }
    return result;

}

console.log(factorialize(5));

//longest word in string

function findLongestWord(str) {
	str = str.split(" ");
  var longest = 0;
  for(var i = 0; i < str.length; i++) {
  	console.log("str[i] ", str[i])
  	if(str[i].length > longest) {
    	 longest = str[i].length;
    }
    console.log("longest ", longest);
  }
  return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//TitleCase

function titleCase(str) {
	str = str.toLowerCase()
  return str.replace(/\s\w/g, function(letter) {
  	 return letter.toUpperCase()
  })
  .replace(/^.{0,1}/, function(firstLetter) {
  	return firstLetter.toUpperCase();
  })

}

console.log(titleCase("I'm a little tea pot"));

//Largest of Four

// Largest Of Four
function largestOfFour(arr) {
  var result = [];
  for (var i = 0; i < 4; i++) {
    result.push(Math.max(...arr[i]));
  }
  return result;
  // return arr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
