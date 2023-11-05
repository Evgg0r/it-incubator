// A hero is on his way to the castle to complete his mission.However, he 's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he'
// s gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive ?

//     Return true
// if yes, false otherwise: )


// function hero(bullets, dragons) {
//     if (bullets >= dragons * 2) {
//         return true;
//     } else {
//         return false;
//     }
// }

//---------------------------

// Make a
// function that will
// return a greeting statement that uses an input;
// your program should
// return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]


// function greet(name) {
//     return "Hello, " + name + " how are you doing today?";
// }

//---------------------------

// Write a
// function that calculates the original product price, without VAT.

// Example

// If a product price is 200.00 and VAT is 15 % , then the final product price(with VAT) is: 200.00 + 15 % = 230.00

// Thus,
// if your
// function receives 230.00 as input, it should
// return 200.00

// Notes:

//     VAT is always 15 %
//     for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then
// return -1



// function excludingVatPrice(price) {
//     if (price === null) {
//         return -1;
//     } else if (price > 0) {
//         let newPrice = (price * 100) / 115;
//         return parseFloat(newPrice.toFixed(2));
//     } else {
//         return 0;
//     }
// }

//---------------------------