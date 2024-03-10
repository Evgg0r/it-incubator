function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

//-------------------------------

function testGreaterOrEqual(val) {
    if (val >= 20) { // Change this line
        return "20 or Over";
    }

    if (val >= 10) { // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);

//-------------------------------

let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
        case 7:
        case 8:
        case 9:
            count = count;
            break;
    }

    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }

    // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

//-------------------------------

function checkObj(obj, checkProp) {
    // Only change code below this line

    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp]
    } else {
        return "Not Found";
    }
    // Only change code above this line
}

//-------------------------------

const myMusic = [{
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
        "CD",
        "8T",
        "LP"
    ],
    "gold": true
}, {
    "artist": "new artist",
    "title": "new title",
    "release_year": 2023,
    "formats": ["CD", "mp3", "vinil"]
}];

//-------------------------------

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

//-------------------------------

const myArray = [];

// Only change code below this line
let i = 5
while (i >= 0) {
    myArray.push(i);
    i--;
}

//-------------------------------

const myArray = [];

// Only change code below this line
for (let i = 1; i <= 5; i++) {
    myArray.push(i)
}

//-------------------------------

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

//-------------------------------

multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);

/ Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
    myArray.push(i);
    i++;
} while (i < 11);

//-------------------------------

function sum(arr, n) {
    // Only change code below this line
    if (n === 0) {
        return 0;
    }

    return sum(arr, n - 1) + arr[n - 1];
    // Only change code above this line
}

function sum(arr, n) {
    // Only change code below this line
    if (n === 0) {
        return 0;
    }

    return sum(arr, n - 1) + arr[n - 1];
    // Only change code above this line
}