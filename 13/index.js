// const repeatCount = 7;

// for (let index = 1; index <= repeatCount; index++) {
//     // целевое действие
//     document.write("a");
// }

// Массив оценок студента

// let grades = [5, 4, 3, 5, 4, 4, 3, 5, ];

// for (let i = 0;i < grades.length; i++) {
//     document.write(grades[0], '<br>');
// }

// document.write(grades[0], '<br>'); 
// document.write(grades[1], '<br>'); 
// document.write(grades[2], '<br>'); 
// document.write(grades[3], '<br>'); 
// document.write(grades[4], '<br>'); 

let shoppingLists = [
    ["молоко", "хлеб", "яйца"],
    ["сок", "мороженное"],
    ["корм для кота", "шампуть"]
]

// let list = shoppingLists[0];
// product0 = list[0];
// product1 = list[1];
// product2 = list[2];

// list = shoppingLists[1];
// product0 = list[0];
// product1 = list[1];

// list = shoppingLists[2];
// product0 = list[0];
// product1 = list[1];


// мое решение
// for (let i = 0; i < shoppingLists.length; i++) {
//     for (j = 0; j < shoppingLists[i].length; j++) {
//         document.write(shoppingLists[i][j], "<br>")
//     }
// }

// решение димыча

for (let i = 0; i < shoppingLists.length; i++) {
    let subarray = shoppingLists[i];

    document.write("СПИСОК ", i + 1, "<br>");
    document.write("--------------", "<br>");
    for (let j = 0; j < subarray.length; j++) {
        let product = subarray[j];
        document.write(j + 1, " - ", product, "<br>");
    }

    document.write("<br>")
    
}

document.write("<br>")