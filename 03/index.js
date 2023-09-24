// const laptop2 = {
//     name : 'macbook',
//     manufacturer: {
//         title: 'Apple',
//         factoriesCount: 10,
//         factoryAddress: 'China, JohueLee 12',
//         },
//         price: 3000
//     }
    
// console.log(laptop2.manufacturer.factoryAddress);
// console.log(laptop2.manufacturer.factoryAddress.toUpperCase);

let room = {
    wall1: {
        hasWindow: true,
        color: 'white',
        conditioner: {
            manufacturer: 'ASUS',
            power: 220
        }
    },
    wall2: {
        hasWindow: false,
        color: 'white',
        conditioner: null
    },
    wall3: {
        hasWindow: false,
        color: 'white',
        conditioner: null
    },
    wall4: {
        hasWindow: false,
        color: 'white',
        conditioner: null
    }
};

console.log(room.wall1.conditioner.power);