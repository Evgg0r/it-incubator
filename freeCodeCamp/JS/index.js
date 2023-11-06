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