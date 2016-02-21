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

//Confirm the Ending
function end(str, target) {
	var targetLength = target.length;
	var strArr = str.split(" ");
  var lastElement = strArr[strArr.length -1];
  var lastLetters = lastElement.slice(-targetLength);
  return target == lastLetters;
}

console.log(end("He has to give me a new name", "me"));

// FCC
// Repeat a string repeat a string
// function repeat(str, num) {
//     var final = "";
//     for (var i = 0; i < num; i++) {
//         final += str;
//     }
//     return final;
// }
// console.log(repeat("abc", 3));


// Truncate a string
// function truncate(str, num) {
//     var desiredLength = num - 3;
//     if(num <= 3) {
//       return str.slice(0, num) + "...";
//     }
//     else if (num >= str.length) {
//         return str;
//     }
//     return str.slice(0, desiredLength) + "...";
// }

// Chunky Monkey
// function chunk(arr, size) {
//     var chunkedArray = [];
//     if (arr.length % size === 0) {
//         var initial = 0;
//         var ending = size;
//         for (var i = 1; i <= arr.length / size; i++) {
//             chunkedArray.push(arr.slice(initial, ending));
//             initial += size, ending += size;
//         }
//     } else {
//         var initial = 0;
//         var ending = size;
//         var endPoint;
//         if (Math.floor(arr.length / size) > Math.floor(arr.length % size)) {
//             endPoint = Math.floor((arr.length / size)) + Math.floor((arr.length % size ));
//         } else {
//             endPoint = Math.ceil(arr.length % size);
//             console.log(endPoint);
//         }
//         for (var i = 1; i <= endPoint; i++) {
//             chunkedArray.push(arr.slice(initial, ending));
//             initial += size, ending += size;
//         }
//     }
//     return chunkedArray;
// }

// console.log(chunk(["a", "b", "c", "d", "e", "f", "g" "e"], 2));
// console.log(chunk([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // --> [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10]]


//Slasher Flick
// function slasher(arr, howMany) {
//     if (howMany === 0) {
//         return arr;
//     }
//     return arr.splice(howMany, arr.length - 1);
// }

// console.log(slasher([1, 2, 3], 0));

// Mutations


function mutation(arr) {
    var firstElem = arr[0].toLowerCase().split("");
    var secondElem = arr[1].toLowerCase().split("");
    var isPresent = true;
    for(var i = 0; i < secondElem.length; i++) {
        if(firstElem.indexOf(secondElem[i]) == -1) {
            isPresent = false;
            break;
        }
    }
    return isPresent;
}


console.log(mutation(["hello", "hey"])); //--> false
console.log(mutation(["hello", "Hello"])); //--> true
console.log(mutation(["Mary", "Army"])); //--> true
console.log(mutation(["mary", "army"])); //--> true
console.log(mutation(["mary", "aaaarmy"])); //--> true
console.log(mutation(["Alien", "line"])); //--> true


function bouncer(arr) {
    return arr.filter(function(elem) {
        if (elem) {
            return true;
        }
    })
    // Don't show a false ID to this bouncer.
}

console.log(bouncer([7, "ate", "", false, 9]));

function numberTest(value) {
    return
}

function destroyer(arr) {
    var result = [];
    var args = [];
    for(var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    return arr.filter(function(el) {
        return args.indexOf(el) === -1;
    });
}


console.log(destroyer([2, 3, 5, 2, 5, 3], 2));
