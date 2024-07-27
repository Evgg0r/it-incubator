let userChoice // Выбор пользователя
let computerChoice // Выбор компьютера
let isWinner = false // Флаг для определения наличия победителя

const randomNumber = Math.floor(Math.random() * 3)

if (randomNum === 0) {
    computerChoice = 'камень'
} else if (randomNum === 1) {
    computerChoice = 'ножницы'
} else {
    computerChoice = 'бумага'
}

while (isWinner === false) {
    userChoice = prompt('Выбери камень, ножницы или бумага:')
    userChoice = userChoice.toLowerCase()

    if (userChoice === 'камень' || userChoice === 'ножницы' || userChoice === 'бумага'){
        // код...
    } else {
        alert('Введите правильное значение: камень, ножници или бумага')
    }
}