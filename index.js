let gold = 100

// const buildingName = "Tower"
// const costGold = 30

//     buildingName = "Blacksmith"
//     costGold = 120


function createBuilding(buildingName, costGold) {
    if (gold >= costGold) {
        gold = gold - costGold
        console.log(`${buildingName}: work complete.`);
        } else {
        console.log(`${buildingName}: not enough resources.`)
        }
}

createBuilding("Tower", 30)

const name1 = "bob"

function greet(userName) {
    console.log(`${userName}, hi!`);
}

greet(name1)

function increaseResource(carrentValue, increment) {
    const totalValue = currentValue + increment
    return totalValue
}

gold = increaseResource(gold, 300) //