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

// //---------------------------

// For this exercise you will be strengthening your page - fu mastery.You will complete the PaginationHelper class, which is a utility class helpful
// for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page.The types of values contained within the collection / array are not relevant.

// The following are some examples of how this class is used:

//     var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
// helper.pageCount(); // should == 2
// helper.itemCount(); // should == 6
// helper.pageItemCount(0); // should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); // should == 1 (zero based index)
// helper.pageIndex(2); // should == 0
// helper.pageIndex(20); // should == -1
// helper.pageIndex(-10); // should == -1

// class PaginationHelper {
//     constructor(collection, itemsPerPage) {
//         this.collection = collection;
//         this.itemsPerPage = itemsPerPage;
//     }

//     itemCount() {
//         return this.collection.length;
//     }

//     pageCount() {
//         return Math.ceil(this.collection.length / this.itemsPerPage);
//     }

//     pageItemCount(pageIndex) {
//         const pageCount = this.pageCount();

//         if (pageIndex >= 0 && pageIndex < pageCount - 1) {
//             return this.itemsPerPage;
//         } else if (pageIndex === pageCount - 1) {
//             return this.collection.length % this.itemsPerPage;
//         } else {
//             return -1;
//         }
//     }

//     pageIndex(itemIndex) {
//         if (itemIndex >= 0 && itemIndex < this.collection.length) {
//             return Math.floor(itemIndex / this.itemsPerPage);
//         } else {
//             return -1;
//         }
//     }
// }

// //---------------------------

// Write two functions that convert a roman numeral to and from an integer value.Multiple roman numeral values will be tested
// for each
// function.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.In Roman numerals:

//     1990 is rendered: 1000 = M, 900 = CM, 90 = XC;
// resulting in MCMXC
// 2008 is written as 2000 = MM, 8 = VIII;
// or MMVIII
// 1666 uses each Roman symbol in descending order: MDCLXVI.
// Input range: 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII(the "watchmaker's four").

// Examples

// to roman:
//     2000 - > "MM"
// 1666 - > "MDCLXVI"
// 86 - > "LXXXVI"
// 1 - > "I"

// from roman:
//     "MM" - > 2000 "MDCLXVI" - > 1666 "LXXXVI" - > 86 "I" - > 1
// Help

//     +
//     -- -- -- -- + -- -- -- - +
//     |
//     Symbol | Value |
//     + -- -- -- -- + -- -- -- - +
//     |
//     M | 1000 |
//     |
//     CM | 900 |
//     |
//     D | 500 |
//     |
//     CD | 400 |
//     |
//     C | 100 |
//     |
//     XC | 90 |
//     |
//     L | 50 |
//     |
//     XL | 40 |
//     |
//     X | 10 |
//     |
//     IX | 9 |
//     |
//     V | 5 |
//     |
//     IV | 4 |
//     |
//     I | 1 |
//     + -- -- -- -- + -- -- -- - +

//     class RomanNumerals {
//         static toRoman(num) {
//             const romanNumerals = [{
//                     value: 1000,
//                     symbol: 'M'
//                 },
//                 {
//                     value: 900,
//                     symbol: 'CM'
//                 },
//                 {
//                     value: 500,
//                     symbol: 'D'
//                 },
//                 {
//                     value: 400,
//                     symbol: 'CD'
//                 },
//                 {
//                     value: 100,
//                     symbol: 'C'
//                 },
//                 {
//                     value: 90,
//                     symbol: 'XC'
//                 },
//                 {
//                     value: 50,
//                     symbol: 'L'
//                 },
//                 {
//                     value: 40,
//                     symbol: 'XL'
//                 },
//                 {
//                     value: 10,
//                     symbol: 'X'
//                 },
//                 {
//                     value: 9,
//                     symbol: 'IX'
//                 },
//                 {
//                     value: 5,
//                     symbol: 'V'
//                 },
//                 {
//                     value: 4,
//                     symbol: 'IV'
//                 },
//                 {
//                     value: 1,
//                     symbol: 'I'
//                 }
//             ];

//             let result = '';
//             for (let i = 0; i < romanNumerals.length; i++) {
//                 while (num >= romanNumerals[i].value) {
//                     result += romanNumerals[i].symbol;
//                     num -= romanNumerals[i].value;
//                 }
//             }

//             return result;
//         }

//         static fromRoman(str) {
//             const romanNumerals = {
//                 M: 1000,
//                 CM: 900,
//                 D: 500,
//                 CD: 400,
//                 C: 100,
//                 XC: 90,
//                 L: 50,
//                 XL: 40,
//                 X: 10,
//                 IX: 9,
//                 V: 5,
//                 IV: 4,
//                 I: 1
//             };

//             let result = 0;
//             let previousValue = 0;
//             for (let i = str.length - 1; i >= 0; i--) {
//                 let symbol = str[i];
//                 let value = romanNumerals[symbol];
//                 if (value < previousValue) {
//                     result -= value;
//                 } else {
//                     result += value;
//                 }
//                 previousValue = value;
//             }

//             return result;
//         }
//     }

// //---------------------------

// Your task in order to complete this Kata is to write a
// function which formats a duration, given as a number of seconds, in a human - friendly way.

// The
// function must accept a non - negative integer.If it is zero, it just returns "now".Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

//     *
//     For seconds = 62, your
// function should
// return "1 minute and 2 seconds" *
// For seconds = 3662, your
// function should
// return "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules

// The resulting expression is made of components like 4 seconds, 1 year, etc.In general, a positive integer and one of the valid units of time, separated by a space.The unit of time is used in plural
// if the integer is greater than 1.

// The components are separated by a comma and a space(", ").Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one.Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times.So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all
// if its value happens to be zero.Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible".It means that the
// function should not
// return 61 seconds, but 1 minute and 1 second instead.Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.


// function formatDuration(seconds) {
//     if (seconds === 0) {
//         return "now";
//     }

//     const timeUnits = {
//         year: 365 * 24 * 60 * 60,
//         day: 24 * 60 * 60,
//         hour: 60 * 60,
//         minute: 60,
//         second: 1
//     };

//     const components = [];

//     for (const unit in timeUnits) {
//         if (seconds >= timeUnits[unit]) {
//             const count = Math.floor(seconds / timeUnits[unit]);
//             const label = count > 1 ? unit + "s" : unit;
//             components.push(count + " " + label);
//             seconds %= timeUnits[unit];
//         }
//     }

//     return components.length === 1 ? components[0] : components.join(", ").replace(/,([^,]*)$/, " and$1");
// }

// //---------------------------

// Take the following IPv4 address: 128.32 .10 .1

// This address has 4 octets where each octet is a single byte(or 8 bits).

// 1 st octet 128 has the binary representation: 10000000
// 2n d octet 32 has the binary representation: 00100000
// 3 rd octet 10 has the binary representation: 00001010
// 4 th octet 1 has the binary representation: 00000001
// So 128.32 .10 .1 == 10000000.00100000 .00001010 .00000001

// Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

// Complete the
// function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

// Examples

// 2149583361 == > "128.32.10.1"
// 32 == > "0.0.0.32"
// 0 == > "0.0.0.0"

// function int32ToIp(int32) {
//     const binaryString = int32.toString(2).padStart(32, '0');
//     const octets = [];

//     for (let i = 0; i < 32; i += 8) {
//         const octet = parseInt(binaryString.substr(i, 8), 2);
//         octets.push(octet);
//     }

//     return octets.join('.');
// }

// //---------------------------

// Sum of Pairs

// Given a list of integers and a single sum value,
//     return the first two values(parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5], 10)# ^ -- ^ 3 + 7 = 10 ==
//     [3, 7]

// sum_pairs([4, 3, 2, 3, 4], 6)# ^ -- -- - ^ 4 + 2 = 6, indices: 0, 2 * # ^ -- -- - ^ 3 + 3 = 6, indices: 1, 3# ^ -- -- - ^ 2 + 4 = 6, indices: 2, 4# * the correct answer is the pair whose second value has the smallest index ==
//     [4, 2]

// sum_pairs([0, 0, -2, 3], 2)# there are no pairs of values that can be added to produce 2. ==
//     None / nil / undefined(Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5], 10)# ^ -- -- -- -- -- - ^ 5 + 5 = 10, indices: 1, 5# ^ -- ^ 3 + 7 = 10, indices: 3, 4 * # * the correct answer is the pair whose second value has the smallest index ==
//     [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10, 000, 000 elements.Be sure your code doesn 't time out.

// function sumPairs(ints, s) {
//     const seen = new Set();

//     for (const num of ints) {
//         const complement = s - num;
//         if (seen.has(complement)) {
//             return [complement, num];
//         }
//         seen.add(num);
//     }

//     return undefined;
// }

// //---------------------------

// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It 's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

//     alternative text

// Hint:

//     See Fibonacci sequence

// Ref:

//     http: //oeis.org/A000045

//     The
// function perimeter has
// for parameter n where n + 1 is the number of squares(they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5) should
// return 80
// perimeter(7) should
// return 216

// function perimeter(n) {
//     let a = 0;
//     let b = 1;
//     let sum = 4;

//     for (let i = 0; i < n; i++) {
//         const currentSideLength = a + b;
//         sum += 4 * currentSideLength;

//         [a, b] = [b, a + b];
//     }

//     return sum;
// }

// //---------------------------

// Snail Sort

// Given an n x n array,
// return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// snail(array)# => [1, 2, 3, 6, 9, 8, 7, 4, 5]
// For better understanding, please follow the numbers of the next array consecutively:

//     array = [
//         [1, 2, 3],
//         [8, 9, 4],
//         [7, 6, 5]
//     ]
// snail(array)# => [1, 2, 3, 4, 5, 6, 7, 8, 9]
// This image will illustrate things more clearly:


//     NOTE: The idea is not sort the elements from the lowest value to the highest;
// the idea is to traverse the 2 - d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0(empty matrix) is represented as en empty array inside an array[[]].


// function snail(array) {
//     const result = [];

//     while (array.length) {
//         // Get the first row and remove it from the array
//         result.push(...array.shift());

//         // Get the last element from each remaining row
//         for (let i = 0; i < array.length; i++) {
//             const row = array[i];
//             if (row.length) {
//                 result.push(row.pop());
//             }
//         }

//         // Get the last row in reverse order and remove it from the array
//         if (array.length) {
//             result.push(...array.pop().reverse());
//         }

//         // Get the first element from each remaining row in reverse order
//         for (let i = array.length - 1; i >= 0; i--) {
//             const row = array[i];
//             if (row.length) {
//                 result.push(row.shift());
//             }
//         }
//     }

//     return result;
// }

// //---------------------------

// How can you tell an extrovert from an introvert at NSA ?
//     Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl 'f fubrf.

// I found this joke on USENET, but the punchline is scrambled.Maybe you can decipher it ?
//     According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you 're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

//     "EBG13 rknzcyr." - > "ROT13 example."

// "This is my first ROT13 excercise!" - > "Guvf vf zl svefg EBG13 rkprepvfr!"


// function rot13(str) {
//     var deciphered = '';

//     for (var i = 0; i < str.length; i++) {
//         var char = str[i];

//         if (char.match(/[A-Za-z]/)) {
//             var code = str.charCodeAt(i);

//             if (code >= 65 && code <= 90) {
//                 // Uppercase letters
//                 char = String.fromCharCode(((code - 65 + 13) % 26) + 65);
//             } else if (code >= 97 && code <= 122) {
//                 // Lowercase letters
//                 char = String.fromCharCode(((code - 97 + 13) % 26) + 97);
//             }
//         }

//         deciphered += char;
//     }

//     return deciphered;
// }

// //---------------------------

// Given the string representations of two integers,
//     return the string representation of the sum of those integers.

// For example:

//     sumStrings('1', '2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0"
// to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers(about a milion digits), converting to int will not work.

// function sumStrings(a, b) {
//     let result = ''; // Store the resulting sum
//     let carry = 0; // Track the carry-over

//     let i = a.length - 1; // Index for string 'a'
//     let j = b.length - 1; // Index for string 'b'

//     // Iterate through the strings from right to left
//     while (i >= 0 || j >= 0 || carry > 0) {
//         const digitA = i >= 0 ? parseInt(a[i]) : 0; // Get the digit from 'a' or use 0
//         const digitB = j >= 0 ? parseInt(b[j]) : 0; // Get the digit from 'b' or use 0

//         const sum = digitA + digitB + carry; // Calculate the sum
//         const digitSum = sum % 10; // Extract the digit sum
//         carry = Math.floor(sum / 10); // Calculate the carry-over

//         result = digitSum + result; // Prepend the digit sum to the result

//         i--; // Move to the next digit in 'a'
//         j--; // Move to the next digit in 'b'
//     }

//     return result;
// }

// //---------------------------

// My little sister came back home from school with the following task: given a squared sheet of paper she has to cut it in pieces which, when assembled, give squares the sides of which form an increasing sequence of numbers.At the beginning it was lot of fun but little by little we were tired of seeing the pile of torn paper.So we decided to write a program that could help us and protects trees.

// Task

// Given a positive integral number n,
// return a strictly increasing sequence(list / array / string depending on the language) of numbers, so that the sum of the squares is equal to n².

// If there are multiple solutions(and there will be),
//     return as far as possible the result with the largest possible values:

//         Examples

// decompose(11) must
// return [1, 2, 4, 10].Note that there are actually two ways to decompose 11², 11² = 121 = 1 + 4 + 16 + 100 = 1² + 2² + 4² + 10² but don 't return [2,6,9], since 9 is smaller than 10.

// For decompose(50) don 't return [1, 1, 4, 9, 49] but [1, 3, 5, 8, 49] since [1, 1, 4, 9, 49] doesn'
// t form a strictly increasing sequence.

// Note

// Neither[n] nor[1, 1, 1, …, 1] are valid solutions.If no valid solution exists,
//     return nil, null, Nothing, None(depending on the language) or "[]"(C), {}(C++), [](Swift, Go).

// The
// function "decompose"
// will take a positive integer n and
// return the decomposition of N = n² as:

//     [x1...xk] or "x1 ... xk"
// or
// Just[x1...xk] or
// Some[x1...xk] or {
//     x1...xk
// }
// or
//     "[x1,x2, ... ,xk]"
// depending on the language(see "Sample tests")

// Note
// for Bash

// decompose 50 returns "1,3,5,8,49"
// decompose 4 returns "Nothing"
// Hint

// Very often xk will be n - 1.

// function decompose(n) {
//     return decomposeHelper(n * n, n - 1);
// }

// function decomposeHelper(target, current) {
//     if (target === 0) {
//         return []; // Base case: sum of squares is 0, return an empty sequence
//     }

//     for (let i = current; i > 0; i--) {
//         if (target - i * i >= 0) {
//             const sequence = decomposeHelper(target - i * i, i - 1);
//             if (sequence !== null) {
//                 sequence.push(i);
//                 return sequence; // Found a valid sequence, return it
//             }
//         }
//     }

//     return null; // No valid sequence found
// }

// //---------------------------

// Write a
// function that, given a string of text(possibly with punctuation and line - breaks), returns an array of the top - 3 most occurring words, in descending order of the number of occurrences.

// Assumptions:

//     A word is a string of letters(A to Z) optionally containing one or more apostrophes(') in ASCII.
//         Apostrophes can appear at the start, middle or end of a word('abc, abc', 'abc', ab 'c are all valid)
//             Any other characters(e.g.#, \, / , . ...) are not part of a word and should be treated as whitespace.
//                 Matches should be
//                 case -insensitive, and the words in the result should be lowercased.Ties may be broken arbitrarily.If a text contains fewer than three unique words, then either the top - 2 or top - 1 words should be returned, or an empty array
//                 if a text contains no words.Examples:

//                 "In a village of La Mancha, the name of which I have no desire to call to
//                 mind, there lived not long since one of those gentlemen that keep a lance in the lance - rack, an old buckler, a lean hack, and a greyhound
//                 for coursing.An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three - quarters of his income.
//                 "

//                 -- > ["a", "of", "on"]


//                 "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

//                 -- > ["e", "ddd", "aa"]


//                 "  //wont won't won't"

//                 -- > ["won't", "wont"] Bonus points(not really, but just
//                     for fun):

//                 Avoid creating an array whose memory footprint is roughly as big as the input text.Avoid sorting the entire array of unique words.


//                 function topThreeWords(text) {
//                     // Preprocess the text
//                     text = text.replace(/[^\w']+/g, ' ');
//                     text = text.toLowerCase();

//                     // Split the text into words
//                     let words = text.split(' ');

//                     // Count the occurrences of each word
//                     let wordCounts = {};
//                     for (let word of words) {
//                         if (word !== '' && word !== "'") {
//                             wordCounts[word] = (wordCounts[word] || 0) + 1;
//                         }
//                     }

//                     // Sort the words based on their occurrence count in descending order
//                     let sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

//                     // Return the top three words (or fewer if there are fewer than three unique words)
//                     return sortedWords.slice(0, 3).map(([word]) => word);
//                 }

// //---------------------------

// Given a Sudoku data structure with size NxN, N > 0 and√ N == integer, write a method to validate
// if it has been filled out correctly.

// The data structure is a multi - dimensional Array, i.e:

//     [
//         [7, 8, 4, 1, 5, 9, 3, 2, 6],
//         [5, 3, 9, 6, 7, 2, 8, 4, 1],
//         [6, 1, 2, 4, 3, 8, 7, 5, 9],

//         [9, 2, 8, 7, 1, 5, 4, 6, 3],
//         [3, 5, 7, 8, 4, 6, 1, 9, 2],
//         [4, 6, 1, 9, 2, 3, 5, 8, 7],

//         [8, 7, 6, 3, 9, 4, 2, 1, 5],
//         [2, 4, 3, 5, 6, 1, 9, 7, 8],
//         [1, 9, 5, 2, 8, 7, 6, 3, 4]
//     ]
// Rules
// for validation

// Data structure dimension: NxN where N > 0 and√ N == integer
// Rows may only contain integers: 1..N(N included)
// Columns may only contain integers: 1..N(N included)
// 'Little squares'(3 x3 in example above) may also only contain integers: 1..N(N included)

// var Sudoku = function (data) {
//     // Private methods
//     // -------------------------

//     function hasDuplicates(array) {
//         // Helper function to check if an array contains duplicates
//         var values = {};
//         for (var i = 0; i < array.length; i++) {
//             var value = array[i];
//             if (value !== 0) {
//                 if (values[value]) {
//                     return true;
//                 }
//                 values[value] = true;
//             }
//         }
//         return false;
//     }

//     function getColumn(data, columnIndex) {
//         // Helper function to extract a column from the Sudoku data structure
//         var column = [];
//         for (var i = 0; i < data.length; i++) {
//             column.push(data[i][columnIndex]);
//         }
//         return column;
//     }

//     function getSquare(data, startX, startY) {
//         // Helper function to extract a square (3x3) from the Sudoku data structure
//         var square = [];
//         for (var i = startX; i < startX + 3; i++) {
//             for (var j = startY; j < startY + 3; j++) {
//                 square.push(data[i][j]);
//             }
//         }
//         return square;
//     }

//     // Public methods
//     // -------------------------

//     return {
//         isValid: function () {
//             // Check rows
//             for (var i = 0; i < data.length; i++) {
//                 if (hasDuplicates(data[i])) {
//                     return false;
//                 }
//             }

//             // Check columns
//             for (var j = 0; j < data.length; j++) {
//                 var column = getColumn(data, j);
//                 if (hasDuplicates(column)) {
//                     return false;
//                 }
//             }

//             // Check squares
//             var squareSize = Math.sqrt(data.length);
//             for (var startX = 0; startX < data.length; startX += squareSize) {
//                 for (var startY = 0; startY < data.length; startY += squareSize) {
//                     var square = getSquare(data, startX, startY);
//                     if (hasDuplicates(square)) {
//                         return true;
//                     }
//                 }
//             }

//             // All checks passed, the Sudoku is valid
//             return true;
//         }
//     };
// };

// //---------------------------

// Automatons, or Finite State Machines(FSM), are extremely useful to programmers when it comes to software design.You will be given a simplistic version of an FSM to code
// for a basic TCP session.

// The outcome of this exercise will be to
// return the correct state of the TCP FSM based on the array of events given.

// The input array of events will consist of one or more of the following strings:

//     APP_PASSIVE_OPEN, APP_ACTIVE_OPEN, APP_SEND, APP_CLOSE, APP_TIMEOUT, RCV_SYN, RCV_ACK, RCV_SYN_ACK, RCV_FIN, RCV_FIN_ACK
// The states are as follows and should be returned in all capital letters as shown:

//     CLOSED, LISTEN, SYN_SENT, SYN_RCVD, ESTABLISHED, CLOSE_WAIT, LAST_ACK, FIN_WAIT_1, FIN_WAIT_2, CLOSING, TIME_WAIT
// The input will be an array of events.The initial state is CLOSED.Your job is to traverse the FSM as determined by the events, and
// return the proper final state as a string, all caps, as shown above.

// If an event is not applicable to the current state, your code will
// return "ERROR".

// Action of each event upon each state:

//     (the format is INITIAL_STATE: EVENT - > NEW_STATE)

// CLOSED: APP_PASSIVE_OPEN - > LISTEN
// CLOSED: APP_ACTIVE_OPEN - > SYN_SENT
// LISTEN: RCV_SYN - > SYN_RCVD
// LISTEN: APP_SEND - > SYN_SENT
// LISTEN: APP_CLOSE - > CLOSED
// SYN_RCVD: APP_CLOSE - > FIN_WAIT_1
// SYN_RCVD: RCV_ACK - > ESTABLISHED
// SYN_SENT: RCV_SYN - > SYN_RCVD
// SYN_SENT: RCV_SYN_ACK - > ESTABLISHED
// SYN_SENT: APP_CLOSE - > CLOSED
// ESTABLISHED: APP_CLOSE - > FIN_WAIT_1
// ESTABLISHED: RCV_FIN - > CLOSE_WAIT
// FIN_WAIT_1: RCV_FIN - > CLOSING
// FIN_WAIT_1: RCV_FIN_ACK - > TIME_WAIT
// FIN_WAIT_1: RCV_ACK - > FIN_WAIT_2
// CLOSING: RCV_ACK - > TIME_WAIT
// FIN_WAIT_2: RCV_FIN - > TIME_WAIT
// TIME_WAIT: APP_TIMEOUT - > CLOSED
// CLOSE_WAIT: APP_CLOSE - > LAST_ACK
// LAST_ACK: RCV_ACK - > CLOSED "EFSM TCP"

// Examples

//     ["APP_PASSIVE_OPEN", "APP_SEND", "RCV_SYN_ACK"] => "ESTABLISHED"

// ["APP_ACTIVE_OPEN"] => "SYN_SENT"

// ["APP_ACTIVE_OPEN", "RCV_SYN_ACK", "APP_CLOSE", "RCV_FIN_ACK", "RCV_ACK"] => "ERROR"
// This kata is similar to Design a Simple Automaton(Finite State Machine), and you may wish to
// try that kata before tackling this one.

// See wikipedia page Transmission Control Protocol
// for further details.

// See http: //www.medianet.kent.edu/techreports/TR2005-07-22-tcp-EFSM.pdf page 4, for the FSM diagram used for this kata.

//     function traverseTCPStates(eventList) {
//         var state = "CLOSED"; // initial state, always

//         for (var i = 0; i < eventList.length; i++) {
//             var event = eventList[i];

//             // Traversal logic based on current state and event
//             switch (state) {
//                 case "CLOSED":
//                     if (event === "APP_PASSIVE_OPEN") {
//                         state = "LISTEN";
//                     } else if (event === "APP_ACTIVE_OPEN") {
//                         state = "SYN_SENT";
//                     } else {
//                         return "ERROR";
//                     }
//                     break;

//                 case "LISTEN":
//                     if (event === "RCV_SYN") {
//                         state = "SYN_RCVD";
//                     } else if (event === "APP_SEND") {
//                         state = "SYN_SENT";
//                     } else if (event === "APP_CLOSE") {
//                         state = "CLOSED";
//                     } else {
//                         return "ERROR";
//                     }
//                     break;

//                 case "SYN_RCVD":
//                     if (event === "APP_CLOSE") {
//                         state = "FIN_WAIT_1";
//                     } else if (event === "RCV_ACK") {
//                         state = "ESTABLISHED";
//                     } else {
//                         return "ERROR";
//                     }
//                     break;

//                 case "SYN_SENT":
//                     if (event === "RCV_SYN") {
//                         state = "SYN_RCVD";
//                     } else if (event === "RCV_SYN_ACK") {
//                         state = "ESTABLISHED";
//                     } else if (event === "APP_CLOSE") {
//                         state = "CLOSED";
//                     } else {
//                         return "ERROR";
//                     }
//                     break;

//                 case "ESTABLISHED":
//                     if (event === "APP_CLOSE") {
//                         state = "FIN_WAIT_1";
//                     } else if (event === "RCV_FIN") {
//                         state = "CLOSE_WAIT";
//                     } else {
//                         return "ERROR";
//                     }
//                     break;

//                 case "FIN_WAIT_1":
//                     if (event === "RCV_FIN") {
//                         state = "CLOSING";
//                     } else if (event === "RCV_FIN_ACK") {
//                         state = "TIME_WAIT";
//                     } else if (event === "RCV_ACK") {
//                         state = "FIN_WAIT_2";
//                     } else {
//                         return "ERROR";
//                     }
//                     break;

//                 case "CLOSING":
//                     if (event === "RCV_ACK") {
//                         state = "TIME_WAIT";
//                     } else {
//                         return "ERROR";
//                     }
//                     break;

//                 case "FIN_WAIT_2":
//                     if (event === "RCV_FIN") {
//                         state = "TIME_WAIT";
//                     } else {
//                         return "ERROR";
//                     }
//                     break;

//                 case "TIME_WAIT":
//                     if (event === "APP_TIMEOUT") {
//                         state = "CLOSED";
//                     } else {
//                         return "ERROR";
//                     }
//                     break;

//                 case "CLOSE_WAIT":
//                     if (event === "APP_CLOSE") {
//                         state = "LAST_ACK";
//                     } else {
//                         return "ERROR";
//                     }
//                     break;

//                 case "LAST_ACK":
//                     if (event === "RCV_ACK") {
//                         state = "CLOSED";
//                     } else {
//                         return "ERROR";
//                     }
//                     break;

//                 default:
//                     return "ERROR";
//             }
//         }

//         return state;
//     }

// //---------------------------

// In this kata we want to convert a string into an integer.The strings simply represent the numbers in words.

// Examples:

//     "one" => 1 "twenty" => 20 "two hundred forty-six" => 246 "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:

//     The minimum number is "zero"(inclusively)
// The maximum number, which must be supported is 1 million(inclusively)
// The "and" in e.g.
// "one hundred and twenty-four"
// is optional, in some cases it 's present and in others it'
// s not
// All tested numbers are valid, you don 't need to validate them


// function parseInt(string) {
//     const wordsToNumbers = {
//         zero: 0,
//         one: 1,
//         two: 2,
//         three: 3,
//         four: 4,
//         five: 5,
//         six: 6,
//         seven: 7,
//         eight: 8,
//         nine: 9,
//         ten: 10,
//         eleven: 11,
//         twelve: 12,
//         thirteen: 13,
//         fourteen: 14,
//         fifteen: 15,
//         sixteen: 16,
//         seventeen: 17,
//         eighteen: 18,
//         nineteen: 19,
//         twenty: 20,
//         thirty: 30,
//         forty: 40,
//         fifty: 50,
//         sixty: 60,
//         seventy: 70,
//         eighty: 80,
//         ninety: 90,
//         hundred: 100,
//         thousand: 1000,
//         million: 1000000
//     };

//     const words = string.replace(/ and /g, ' ').split(' ');
//     let result = 0;
//     let tempResult = 0;

//     words.forEach(word => {
//         const number = wordsToNumbers[word];

//         if (number >= 1000) {
//             result += tempResult * number;
//             tempResult = 0;
//         } else if (number >= 100) {
//             tempResult *= number;
//         } else if (number) {
//             tempResult += number;
//         } else {
//             const compoundNumberParts = word.split('-');
//             const compoundNumber = compoundNumberParts.reduce((acc, part) => acc + wordsToNumbers[part], 0);
//             tempResult += compoundNumber;
//         }
//     });

//     return result + tempResult;
// }

// //---------------------------