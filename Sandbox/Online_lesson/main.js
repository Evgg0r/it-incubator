// let userChoice // Выбор пользователя
// let computerChoice // Выбор компьютера
// let isWinner = false // Флаг для определения наличия победителя

// const randomNumber = Math.floor(Math.random() * 3)

// // if (randomNumber === 0) {
// //     computerChoice = 'камень'
// // } else if (randomNumber === 1) {
// //     computerChoice = 'ножницы'
// // } else {
// //     computerChoice = 'бумага'
// // }

// switch (randomNumber) {
//     case 0:
//         computerChoice = 'камень'
//         break;
//     case 1:
//         computerChoice = 'ножницы'
//     default:
//         computerChoice = 'бумага'
// }

// while (isWinner === false) {
//     userChoice = prompt('Выбери камень, ножницы или бумага:')
//     userChoice = userChoice.toLowerCase()

//     if (userChoice === 'камень' || userChoice === 'ножницы' || userChoice === 'бумага') {

//         if (computerChoice === userChoice) {
//             alert('Ничья, давай еще разок!')
//         } else {
//             const isUserWiner =
//                 (userChoice === 'камень' && computerChoice === 'ножницы') ||
//                 (userChoice === 'ножницы' && computerChoice === 'бумага') ||
//                 (userChoice === 'бумага' && computerChoice === 'камень')
//             const message = isUserWiner ? 'Ты выиграл!' : ' Ты проиграл!'

//             alert(message)
//             isWinner = true
//         } // код...
//     } else {
//         alert('Введите правильное значение: камень, ножници или бумага')
//     }
// }

/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 = Math.floor(Math.random() * 7) + 1; // your code
let dice2 = Math.floor(Math.random() * 7) + 1; // your code
let isWinningDouble

if (dice1 === dice2 && dice2 >= 3){
  isWinningDouble = true;
}
else {
  isWinningDouble = false;
}// your code
console.log(isWinningDouble ? 'Выигрышный дубль!': 'Не выигрышный дубль.')

console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)