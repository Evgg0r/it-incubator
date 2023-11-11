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
    isActive: true,
    transactions: [{
            title: 'Order Revenue',
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
            title: 'Order Revenue',
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        }
    ]
};

let card2 = {
    type: 'credit',
    networkType: 'visa',
    currencyType: 'EUR',
    currentBallance: 1343.53,
    number: 59232654321012032,
    expirationYear: 2026,
    expirationMonth: 4,
    isActive: false,
    transactions: [{
            title: 'Order Revenue',
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
            title: 'Order Revenue',
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        }
    ]
};

let card3 = {
    type: 'debit',
    networkType: 'mastercard',
    currencyType: 'GBP',
    currentBallance: 3263.65,
    number: 5543259349582930,
    expirationYear: 2028,
    expirationMonth: 3,
    isActive: true,
    transactions: [{
            title: 'Order Revenue',
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
            title: 'Order Revenue',
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        }
    ]
};

let cards = [card1, card2, card3]
// render
document.write('<h1>', 'Hello ', +currentUser.name, '</h1>');
document.write('<h2>', 'Cards; ', '</h2>');

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    document.write('<div>');
    document.write('<b>', card.type + ' card', '</b>', '<br>');
    document.write('<b>', card.networkType, '</b>', '<br>');
    document.write('<b>', 'current balance', '</b>', '<br>');
    document.write('<span>', card.currentBallance, '</span>', '<br>');
    document.write('<h4>', card.number, '<h4>');
    document.write('<span>',
        card.expirationMonth,
        '/',
        card1.expirationYear,
        '</span>'
    );

    document.write('<h2>', 'History Transaction', '</h2>');
    document.write("<ul>");

    for (let j = 0; j < card.transactions.length; j++) {
        let transaction = card.transactions[j];
        console.log(transaction);
        document.write("<li>", transaction.title, ", ", transaction.date, ",", transaction.amount, "</li>");
    }

    document.write("</ul>");
    document.write('</div>');

    document.write('<hr>');
}