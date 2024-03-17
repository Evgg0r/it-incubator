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