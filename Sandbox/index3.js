let student = {
    info: {
        firsName: 'Ivan',
        lastName: 'Ivanov',
    },
    address: {
        country: 'France',
        city: 'Paris',
    }
}

document.write('<b> firstName: </b>', student.info.firsName, '<br>');
document.write('<b> lastName:  </b>', student.info.lastName)
document.write('<b> кто это тут пользуется скобочной формой </b>', student.address.country, '<br>')
