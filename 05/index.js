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

function clunk(times) {
    var num = times;
    while (num > 0) {
        display("clunk");
        num = num - 1;
    }
}

function thingamajig(size) {
    var facky = 1;
    clunkCounter = 0;
    if (size == 0) {
        display("clank");
    } else if (size == 1) {
        display("thunk");
    } else {
        while (size > 1) {
            facky = facky * size;
        }
        size = size - 1;
        clunk(facky);
    }
}

function display(output) {
    console.log(output);
clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thingamajig(1);
console.log(clunkCounter);