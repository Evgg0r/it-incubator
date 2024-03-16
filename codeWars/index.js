// // A hero is on his way to the castle to complete his mission.However, he 's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he'
// // s gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive ?

// //     Return true
// // if yes, false otherwise: )


// // function hero(bullets, dragons) {
// //     if (bullets >= dragons * 2) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }

// //---------------------------

// // Make a
// // function that will
// // return a greeting statement that uses an input;
// // your program should
// // return, "Hello, <name> how are you doing today?".

// // [Make sure you type the exact thing I wrote or the program may not execute properly]


// // function greet(name) {
// //     return "Hello, " + name + " how are you doing today?";
// // }

// //---------------------------

// // Write a
// // function that calculates the original product price, without VAT.

// // Example

// // If a product price is 200.00 and VAT is 15 % , then the final product price(with VAT) is: 200.00 + 15 % = 230.00

// // Thus,
// // if your
// // function receives 230.00 as input, it should
// // return 200.00

// // Notes:

// //     VAT is always 15 %
// //     for the purposes of this Kata.
// // Round the result to 2 decimal places.
// // If null value given then
// // return -1



// // function excludingVatPrice(price) {
// //     if (price === null) {
// //         return -1;
// //     } else if (price > 0) {
// //         let newPrice = (price * 100) / 115;
// //         return parseFloat(newPrice.toFixed(2));
// //     } else {
// //         return 0;
// //     }
// // }

// //---------------------------

// // altERnaTIng cAsE <= > ALTerNAtiNG CaSe

// // Define String.prototype.toAlternatingCase(or a similar
// //         function / method such as to_alternating_case / toAlternatingCase / ToAlternatingCase in your selected language; see the initial solution
// //         for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.For example:

// //     "hello world".toAlternatingCase() === "HELLO WORLD"
// // "HELLO WORLD".toAlternatingCase() === "hello world"
// // "hello WORLD".toAlternatingCase() === "HELLO world"
// // "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// // "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// // "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// // "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// // As usual, your
// // function / method should be pure, i.e.it should not mutate the original string.



// // String.prototype.toAlternatingCase = function () {
// //     let result = "";
// //     for (let i = 0; i < this.length; i++) {
// //         const char = this[i];
// //         if (char === char.toUpperCase()) {
// //             result += char.toLowerCase();
// //         } else {
// //             result += char.toUpperCase();
// //         }
// //     }
// //     return result;
// // }

// //---------------------------

// // DESCRIPTION:

// //     Check your arrows

// // You have a quiver of arrows, but some have been damaged.The quiver contains arrows with an optional range information(different types of targets are positioned at different ranges), so each item is an arrow.
// // You need to verify that you have some good ones left, in order to prepare
// // for battle:

// //     anyArrows([{
// //         range: 5
// //     }, {
// //         range: 10,
// //         damaged: true
// //     }, {
// //         damaged: true
// //     }])
// // If an arrow in the quiver does not have a damaged status, it means it 's new.

// // The expected result is a boolean, indicating whether you have any good arrows left.

// // Reference: https: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// //     function anyArrows(arrows) {
// //         return arrows.some((arrow) => {
// //             return !arrow.damaged;
// //         });
// //     }

// //---------------------------

// // DESCRIPTION:

// //     The Collatz conjecture(also known as 3n + 1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// //     [This is writen in pseudocode]
// // if (number is even) number = number / 2
// // if (number is odd) number = 3 * number + 1# Task

// // Your task is to make a
// // function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

// // # Examples

// // hotpo(1) returns 0(1 is already 1)

// // hotpo(5) returns 5
// // 5 - > 16 - > 8 - > 4 - > 2 - > 1

// // hotpo(6) returns 8
// // 6 - > 3 - > 10 - > 5 - > 16 - > 8 - > 4 - > 2 - > 1

// // hotpo(23) returns 15
// // 23 - > 70 - > 35 - > 106 - > 53 - > 160 - > 80 - > 40 - > 20 - > 10 - > 5 - > 16 - > 8 - > 4 - > 2 - > 1

// // var hotpo = function (n) {
// //     if (n == 0) {
// //         return 0;
// //     }

// //     var count = 0;
// //     while (n !== 1) {
// //         if (n % 2 === 0) {
// //             n = n / 2;
// //         } else {
// //             n = 3 * n + 1;
// //         }
// //         count++;
// //     }
// //     return count;
// // };

// //---------------------------

// // Given a string s, write a method(function) that will
// // return true
// // if its a valid single integer or floating number or false
// // if its not.

// // Valid examples, should
// // return true:

// //     isDigit("3")
// // isDigit("  3  ")
// // isDigit("-3.23")
// // should
// // return false:

// //     isDigit("3-4")
// // isDigit("  3   5")
// // isDigit("3 5")
// // isDigit("zero")


// // function isDigit(s) {
// //     if (s.length === 0) {
// //         return false;
// //     }
// //     if (!/^[+-]?\d+(\.\d+)?$/.test(s)) {
// //         return false;
// //     }
// //     return !isNaN(parseFloat(s));
// // }

// //---------------------------


//     Make multiply functions that will
// return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following
// function names:

// addition = add

// multiply = multiply

// division = divide(both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a(operation) b

// function add(a, b) {
//     return a + b
// }

// function divide(a, b) {
//     return a / b
// }

// function multiply(a, b) {
//     return a * b
// }

// function mod(a, b) {
//     return a % b
// }

// function exponent(a, b) {
//     return a ** b
// }

// function subt(a, b) {
//     return a - b
// }

// //---------------------------

// There are pillars near the road.The distance between the pillars is the same and the width of the pillars is the same.Your
// function accepts three arguments:

//     number of pillars(≥1);
// distance between pillars(10 - 30 meters);
// width of the pillar(10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters(without the width of the first and last pillar).

// function pillars(num_pill, dist, width) {
//     if (num_pill < 2) return 0;
//     const widthAllPillars = (num_pill - 2) * width;
//     const distAll = (num_pill - 1) * (dist * 100);

//     return distAll + widthAllPillars;
// }

// //---------------------------

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.ROT13 is an example of the Caesar cipher.

// Create a
// function that takes a string and returns the string ciphered with Rot13.If there are numbers or special characters included in the string, they should be returned as they are.Only letters from the latin / english alphabet should be shifted, like in the original Rot13 "implementation".

// function rot13(message) {
//     var result = "";
//     for (var i = 0; i < message.length; i++) {
//         var char = message[i];
//         if (char.match(/[a-z]/i)) {
//             var code = message.charCodeAt(i);
//             if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//                 // Shift the character code by 13 positions
//                 if ((code >= 65 && code <= 77) || (code >= 97 && code <= 109)) {
//                     code += 13;
//                 } else {
//                     code -= 13;
//                 }
//                 char = String.fromCharCode(code);
//             }
//         }
//         result += char;
//     }
//     return result;
// }

// //---------------------------

// The rgb
// function is incomplete.Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.Valid decimal values
// for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples(input-- > output):

//     255, 255, 255-- > "FFFFFF"
// 255, 255, 300-- > "FFFFFF"
// 0, 0, 0-- > "000000"
// 148, 0, 211-- > "9400D3"

// function rgb(r, g, b) {
//     // Round the values to the nearest valid range (0-255)
//     r = Math.max(0, Math.min(255, Math.round(r)));
//     g = Math.max(0, Math.min(255, Math.round(g)));
//     b = Math.max(0, Math.min(255, Math.round(b)));

//     // Convert the decimal values to hexadecimal and format the result
//     const hexValue = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');

//     return hexValue.toUpperCase();
// }

// //---------------------------

// This time we want to write calculations using functions and get the results.Let 's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

//     There must be a
// function
// for each number from 0("zero") to 9("nine")
// There must be a
// function
// for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer
// function represents the left operand, the most inner
// function represents the right operand
// Division should be integer division.For example, this should
// return 2, not 2.666666...:
//     eight(dividedBy(three()));

// function zero(operation = null) {
//     if (operation) {
//         return operation(0);
//     }
//     return 0;
// }

// function one(operation = null) {
//     if (operation) {
//         return operation(1);
//     }
//     return 1;
// }

// function two(operation = null) {
//     if (operation) {
//         return operation(2);
//     }
//     return 2;
// }

// function three(operation = null) {
//     if (operation) {
//         return operation(3);
//     }
//     return 3;
// }

// function four(operation = null) {
//     if (operation) {
//         return operation(4);
//     }
//     return 4;
// }

// function five(operation = null) {
//     if (operation) {
//         return operation(5);
//     }
//     return 5;
// }

// function six(operation = null) {
//     if (operation) {
//         return operation(6);
//     }
//     return 6;
// }

// function seven(operation = null) {
//     if (operation) {
//         return operation(7);
//     }
//     return 7;
// }

// function eight(operation = null) {
//     if (operation) {
//         return operation(8);
//     }
//     return 8;
// }

// function nine(operation = null) {
//     if (operation) {
//         return operation(9);
//     }
//     return 9;
// }

// function plus(b) {
//     return function (a) {
//         return a + b;
//     };
// }

// function minus(b) {
//     return function (a) {
//         return a - b;
//     };
// }

// function times(b) {
//     return function (a) {
//         return a * b;
//     };
// }

// function dividedBy(b) {
//     return function (a) {
//         return Math.floor(a / b);
//     };
// }

// //---------------------------

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

//     maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy
// case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.If the list is made up of only negative numbers,
//     return 0 instead.

// Empty list is considered to have zero greatest sum.Note that the empty list or array is also a valid sublist / subarray.

// var maxSequence = function (arr) {
//     if (arr.length === 0) {
//         return 0; // Empty list, so the maximum sum is 0
//     }

//     var maxSum = 0; // Initialize the maximum sum as 0
//     var currentSum = 0; // Initialize the current sum as 0

//     for (var i = 0; i < arr.length; i++) {
//         currentSum += arr[i]; // Add the current element to the current sum

//         if (currentSum > maxSum) {
//             maxSum = currentSum; // Update the maximum sum if the current sum is greater
//         }

//         if (currentSum < 0) {
//             currentSum = 0; // Reset the current sum to 0 if it becomes negative
//         }
//     }

//     return maxSum;
// };


// //---------------------------

// You are going to be given an array of integers.Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.If there is no index that would make this happen,
//     return -1.

// For example:

//     Let 's say you are given the array {1,2,3,4,3,2,1}:
// Your
// function will
// return the index 3, because at the 3 rd position of the array, the sum of left side of the index({
//     1,
//     2,
//     3
// }) and the sum of the right side of the index({
//     3,
//     2,
//     1
// }) both equal 6.

// Let 's look at another one.
// You are given the array {
//     1,
//     100,
//     50,
//     -51,
//     1,
//     1
// }:
// Your
// function will
// return the index 1, because at the 1 st position of the array, the sum of left side of the index({
//     1
// }) and the sum of the right side of the index({
//     50,
//     -51,
//     1,
//     1
// }) both equal 1.

// Last one:
//     You are given the array {
//         20,
//         10,
//         -80,
//         10,
//         10,
//         15,
//         35
//     }
// At index 0 the left side is {}
// The right side is {
//     10,
//     -80,
//     10,
//     10,
//     15,
//     35
// }
// They both are equal to 0 when added.(Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most languages the index of an array starts at 0.

// Input

// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output

// The lowest index N where the side to the left of N is equal to the side to the right of N.If you do not find an index that fits these rules, then you will
//     return -1.

//     Note

// If you are given an array with multiple answers,
// return the lowest correct index.

// function findEvenIndex(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const leftSum = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
//         const rightSum = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);

//         if (leftSum === rightSum) {
//             return i;
//         }
//     }

//     return -1;
// }