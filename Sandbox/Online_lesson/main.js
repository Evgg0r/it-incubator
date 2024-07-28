let userChoice // Выбор пользователя
let computerChoice // Выбор компьютера
let isWinner = false // Флаг для определения наличия победителя

const randomNumber = Math.floor(Math.random() * 3)

// if (randomNumber === 0) {
//     computerChoice = 'камень'
// } else if (randomNumber === 1) {
//     computerChoice = 'ножницы'
// } else {
//     computerChoice = 'бумага'
// }

switch (randomNumber) {
    case 0:
        computerChoice = 'камень'
        break;
    case 1:
        computerChoice = 'ножницы'
    default:
        computerChoice = 'бумага'
}

while (isWinner === false) {
    userChoice = prompt('Выбери камень, ножницы или бумага:')
    userChoice = userChoice.toLowerCase()

    if (userChoice === 'камень' || userChoice === 'ножницы' || userChoice === 'бумага') {

        if (computerChoice === userChoice) {
            alert('Ничья, давай еще разок!')
        } else {
            const isUserWiner =
                (userChoice === 'камень' && computerChoice === 'ножницы') ||
                (userChoice === 'ножницы' && computerChoice === 'бумага') ||
                (userChoice === 'бумага' && computerChoice === 'камень')
            const message = isUserWiner ? 'Ты выиграл!' : ' Ты проиграл!'

            alert(message)
            isWinner = true
        } // код...
    } else {
        alert('Введите правильное значение: камень, ножници или бумага')
    }
}