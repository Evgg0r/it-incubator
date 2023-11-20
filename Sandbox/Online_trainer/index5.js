const dayTrainings = getDayTrainings();

renderDayTrainings(dayTrainings)


function renderDayTrainings (dayTrainings){
    // Цикл для обхода всех элементов в массиве dayTrainings
    for (let i = 0; i < dayTrainings.length; i++) {
    document.write('<div class="card-block">');

   
    // Вывод заголовка с днем недели (например, Monday или Tuesday)
    document.write('<h2>', dayTrainings[i][0].dayOfWeek, '</h2>');
    const currentDayOfTraining = dayTrainings[i][0]
    const {exercises} = currentDayOfTraining 
    renderExercises(exercises)
// Цикл для обхода всех упражнений внутри каждого элемента dayTraining1 или dayTraining2

    document.write('<hr>')
    document.write('</div>');
}
}


function renderExercises (exercises){

    for (let j = 0; j < exercises.length; j++) {

        // Вывод названия упражнения (например, Deadlift или Pull-ups & Chin-ups)
        document.write('<div class="income">');
        document.write('<h3>', exercises[j].nameExercise, '</h3>');
        const {trainingApproach} = exercises[j]

        renderTrainingApproach(trainingApproach)

        
        const {imageTechOfExecution: imageTech} = exercises[j];
        // Цикл для обхода всех изображений техники выполнения внутри каждого упражнения
        for (let l = 0; l < imageTech.length; l++) {
            document.write('<img src="', imageTech[l], '">');
        }
        document.write('</div>');
    }
}

function renderTrainingApproach (trainingApproach){
// Цикл для обхода всех подходов внутри каждого упражнения
        for (let k = 0; k < trainingApproach.length; k++) {
            const approachNumber = k + 1; // Вычисляем порядковый номер подхода
            const {nameNumber, weight, repetitions} = trainingApproach[k] 

            // Вывод информации о номере подхода, весе и повторениях
            if (weight > 0) {
                document.write('<p>', approachNumber, ". ", nameNumber, " approach with ", "<strong>", weight, " kg x ", repetitions, " repetitions", "</strong>", '</p>', '<br>');
            } else {
                document.write('<p>', approachNumber, ". ", nameNumber, " approach with ", "<strong>", repetitions, " repetitions", "</strong>", '</p>', '<br>');
            }
        }
}


function getDayTrainings() {
    let dayTraining1 = [{
        dayOfWeek: 'Monday',
        exercises: [{
            nameExercise: 'Deadlift',
            trainingApproach: [{
                number: 'First',
                weight: 50,
                repetitions: 10,
            }, {
                number: 'Second',
                weight: 40,
                repetitions: 15,
            }, {
                number: 'Third',
                weight: 35,
                repetitions: 12,
            }, {
                number: 'Fourth',
                weight: 35,
                repetitions: 12,
            }],
            imageTechOfExecution: [
                './image/Deadlift/image1.svg',
                './image/Deadlift/image2.svg',
                './image/Deadlift/image3.svg',
            ],
        }, {
            nameExercise: 'Pull-ups & Chin-ups',
            trainingApproach: [{
                number: 'First',
                weight: 0,
                repetitions: 10,
            }, {
                number: 'Second',
                weight: 0,
                repetitions: 15,
            }, {
                number: 'Third',
                weight: 0,
                repetitions: 12,
            }, {
                number: 'Fourth',
                weight: 0,
                repetitions: 12,
            }],
            imageTechOfExecution: [
                './image/Pull-ups&Chin-ups/image1.svg',
                './image/Pull-ups&Chin-ups/image2.svg',
                './image/Pull-ups&Chin-ups/image3.svg',
            ],
        }]
    }];
    
    let dayTraining2 = [{
        dayOfWeek: 'Tuesday',
        exercises: [{
            nameExercise: 'Barbell squats',
            trainingApproach: [{
                number: 'First',
                weight: 50,
                repetitions: 10,
            }, {
                number: 'Second',
                weight: 40,
                repetitions: 15,
            }, {
                number: 'Third',
                weight: 35,
                repetitions: 12,
            }, {
                number: 'Fourth',
                weight: 35,
                repetitions: 12,
            }],
            imageTechOfExecution: [
                './image/Barbell_squats/image1.svg',
                './image/Barbell_squats/image2.svg',
                './image/Barbell_squats/image3.svg',
            ],
        }, {
            nameExercise: 'Dumbbell lunges',
            trainingApproach: [{
                number: 'First',
                weight: 8,
                repetitions: 10,
            }, {
                number: 'Second',
                weight: 8,
                repetitions: 15,
            }, {
                number: 'Third',
                weight: 7,
                repetitions: 12,
            }, {
                number: 'Fourth',
                weight: 5,
                repetitions: 12,
            }],
            imageTechOfExecution: [
                './image/Dumbbell_lunges/image1.svg',
                './image/Dumbbell_lunges/image2.svg',
                './image/Dumbbell_lunges/image3.svg',
            ],
        }]
    }];
    
    
    let dayTrainings = [dayTraining1, dayTraining2];

    return dayTrainings; 
}
