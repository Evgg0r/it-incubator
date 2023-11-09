// data

let currentUser = {
    name: 'Alex',
}

let card1 = {
    type: 'debit',
    networkType: 'mastercard',
    currencyType: 'USD',
    currentBallance: 5750.53,
    number: 5282345678901289,
    expirationYear: 2025,
    expirationMonth: 9,
    isActive: true
};

let card2 = {
    type: 'credit',
    networkType: 'visa',
    currencyType: 'EUR',
    currentBallance: 1343.53,
    number: 59232654321012032,
    expirationYear: 2026,
    expirationMonth: 4,
    isActive: false
};

let card3 = {
    type: 'debit',
    networkType: 'mastercard',
    currencyType: 'GBP',
    currentBallance: 3263.65,
    number: 5543259349582930,
    expirationYear: 2028,
    expirationMonth: 3,
    isActive: true
};

let cards = [card1, card2, card3]
// render
document.write('<h1>', 'Hello ', +currentUser.name, '</h1>');
document.write('<h2>', 'Cards; ', '</h2>');

for (let i = 0; i <= cards.length; i++) {
    let card = cards[i];
    document.write('<div>');
    document.write('<b>', card.type + ' card', '</b>', '<br>');
    document.write('<b>', card.networkType, '</b>', '<br>');
    document.write('<b>', 'current balance', '</b>', '<br>');
    document.write('<span>', card.currentBallance, '</span>', '<br>');
    document.write('<h4>', card.number, '<h4>');
    document.write('<span>', card.expirationMonth, '/', card1.expirationYear, '</span>', '<br>');
}

ВРЕМЯ В ВИДЕО 2.33.26