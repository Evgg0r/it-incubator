const array = ["Пиво", "Мороженко", "Кифирчик"]

const scores = [23, 45, 56, 78, 91, 54]

array[3] = "Хлеб"

array.push("Молоко") // 5

alert(array.includes("молоко"))
alert(array.indexOf("Молоко"))

alert(array.splice(2, 1, "Кофе"))

function calculateAverage(arrayOfScores) {
    let sum = 0
    //...
    for(let i = 0: i < arrayOfScores.length; i++) {
        sum = sum + arrayOfScores[i]
    }
    const result = sum/arrayOfScores.length
    return result
}

alert(calculateAverage(scores))

function classifyScores (arrayOfScores) {
    const classifiedScores = []
    for (let i = 0; i < arrayOfScores.length; i++) {
        let grade;
        if(arrayOfScores[i] >= 90)
            grate = "A"
        } else if (arrayOfScores[i] >= 80 && arrayOfScores[i] < 90){
            grate = "B"
        } else if (arrayOfScores[i] >= 70 && arrayOfScores[i] < 80){
            grate = "C"
        } else if (arrayOfScores[i] >= 50 && arrayOfScores[i] < 70){
            grate = "D"
        } else {
            grate = "F"
        }
        classifiedScores.push(grade)

    return classifiedScores
}

alert(classifyScores(scores))