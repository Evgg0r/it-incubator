// dogName = "lady";
// dogWeight = 17;

// function bark(name, weight) {
//     if (weight > 20) {
//         console.log(name + " says WOOF WOOF");
//     } else {
//         console.log(name + " says woof woof");
//     }
// }

// bark("rover", 20);
// bark("spot", 13);
// bark("spike", 53);
// bark("lady", 17);


// function whatShallWear(temp) {
//     if (temp < 60) {
//         console.log("Wear a jacket");
//     } else if (temp < 70) {
//         console.log("Wear a sweater");
//     } else {
//         console.log("Wear t-shirt");
//     }
// }

// whatShallWear(50);
// whatShallWear(80);
// whatShallWear(60);

// ------------------------------

// function clunk(times) {
//     var num = times;
//     while (num > 0) {
//         display("clunk");
//         num = num - 1;
//     }
// }

// function thingamajig(size) {
//     var facky = 1;
//     clunkCounter = 0;
//     if (size == 0) {
//         display("clank");
//     } else if (size == 1) {
//         display("thunk");
//     } else {
//         while (size > 1) {
//             facky = facky * size;
//         }
//         size = size - 1;
//         clunk(facky);
//     }
// }

// function display(output) {
//     console.log(output);
// clunkCounter = clunkCounter + 1;
// }
// var clunkCounter = 0;
// thingamajig(1);
// console.log(clunkCounter);

// ------------------------------

// function makePhrases() {
//     let words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
//     let words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
//     let words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

//     let rand1 = Math.floor(Math.random() * words1.length);
//     let rand2 = Math.floor(Math.random() * words2.length);
//     let rand3 = Math.floor(Math.random() * words3.length);

//     let phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
//     alert(phrase);
// }

// makePhrases();

// ------------------------------
// var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
// var hasBubbleGum = [false, false, false, true];

// for (var i = 0; i < hasBubbleGum.length; i++) {
//     if (hasBubbleGum[i]) {
//         console.log(products[i] +
//             " contains bubble gum");
//     }

// }

// ------------------------------

let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

function printAndGetHighScore(scores) {
    let highScore = 0;
    var output;
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

function getBestResults(scores, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}
let highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

let bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

function getMostCostEffectiveSolution(score, costs, hihgScore) {
    let cost = 100;
    let index;
    for (i =0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i]
            }
        }
    }
    return index;
}

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore); console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");