// function getSum(a, b, c) {
//     const sum = a + b + c;
//     return sum;
// }

// function getGreetingMassege(userName, companyName) {
//     return "Hello , " + name + "! Welcome to " + name2;
// }

// const result = getSum(10, 20, 30);
// // console.log(result);

// const massege = getGreetingMassege('Shenia', 'IT-INCUBATOR.IO');
// console.log(massege);

// function bla() {
// const sum = 10;
// console.log(sum);
// }

// const sum = 100;
// console.log(sum);

// bla();

function hero(bullets, dragons) {
    if (bullets !== 0 && bullets % dragons === 0 && bullets / dragons >= 2) {
        return true;
    } else {
        return false;
    }
}

// console.log(hero(10, 5));
// console.log(hero(7, 4));
// console.log(hero(4, 5));
console.log(hero(100, 40));
// console.log(hero(1500, 751));