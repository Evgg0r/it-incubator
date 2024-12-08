document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('course-title')
    title.classList.remove('title')

    const colorButton = document.querySelector('#color-button')
    colorButton.setAttribute('title', 'Обновленное содержание курса 📘 ')
    colorButton.style.backgroundColor = 'blueviolet'
    colorButton.style.color = 'white'
    colorButton.style.border = 'none'
    colorButton.style.padding = '5px 10px'
    colorButton.style.borderRadius = '5px'

    function getRandomColors() {
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)

        return `rgb(${red}, ${green}, ${blue})`
    }

    function setRandomColor() {
        let items = document.querySelectorAll('.item')
        console.log(items);

        for (const item of items) {
            item.style.color = getRandomColors();
        }
    }

    colorButton.addEventListener('click', setRandomColor)

    const list = document.querySelector(".list")
    list.classList.add('current') //remove удаляет класс


    const domItem = list.querySelector('#dom')
    domItem.innerHTML = '<a href="https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model/Introduction">Взаимодействие с DOM</a>'
})