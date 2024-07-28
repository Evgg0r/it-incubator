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

const score = 50 // тестовое значение, можно изменять
let grade
// your code
switch (true) {
    case (score >= 0 && score <= 49):
        grade = "F";
        break;
    case (score >= 50 && score <= 69):
        grade = "D";
        break;
    case (score >= 70 && score <= 79):
        grade = "C";
        break;
    case (score >= 80 && score <= 89):
        grade = "B";
        break;
    case (score >= 90 && score <= 100):
        grade = "A"
        break;
}

console.log(grade);