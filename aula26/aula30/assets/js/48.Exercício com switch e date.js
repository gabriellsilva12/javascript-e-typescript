let bd = document.querySelector('body')
bd.addEventListener('load', carregar)

function createh1() {
    const aga1 = document.createElement('h1');
    return aga1;
}

function createSwitchWeek(week) {
    switch (week) {
        case 0:
            week = `Domingo`
            break
        case 1:
            week = `Segunda-feira`
            break
        case 2:
            week = `Terça-feira`
            break
        case 3:
            week = `Quarta-feira`
            break
        case 4:
            week = `Quinta-feira`
            break
        case 5:
            week = `Sexta-feira`
            break
        case 6:
            week = `Sábado`
            break
    }
    return week
}

function createSwitchMonth(month) {

    switch (month) {
        case 0:
            month = `Janeiro`
            break
        case 1:
            month = `Fevereiro`
            break
        case 2:
            month = `Março`
            break
        case 3:
            month = `Abril`
            break
        case 4:
            month = `Maio`
            break
        case 5:
            month = `Junho`
            break
        case 6:
            month = `Julho`
            break
        case 7:
            month = `Agosto`
            break
        case 8:
            month = `Setembro`
            break
        case 9:
            month = `Outubro`
            break
        case 10:
            month = `Novembro`
            break
        case 11:
            month = `Dezembro`
            break
    }
    return month
}

function createNewDatePtBR(arrayDate, t) {

    let dayWeek = arrayDate[0]
    let day = arrayDate[1]
    let month = arrayDate[2]
    let year = arrayDate[3]
    let hours = arrayDate[4]
    let minutes = arrayDate[5]
    let seconds = arrayDate[6]

    month = createSwitchMonth(month)
    dayWeek = createSwitchWeek(dayWeek)
    // switch (dayWeek) {
    //     case 0: 
    //         dayWeek = `Segunda-feira`
    //         break
    // }

    return [month,dayWeek]

}

function datetoday() {

    let date = new Date()
    let newDay = date.getDay();
    let newDate = date.getDate();
    let newMonth = date.getMonth();
    let newYear = date.getFullYear();
    let newHours = date.getHours();
    let newMinutes = date.getMinutes();
    let newSeconds = date.getSeconds();

    return [newDay, newDate, newMonth, newYear, newHours, newMinutes, newSeconds]
}


function carregar() {

    let section = document.querySelector('.container');
    let hh1 = createh1();

    let nv = createNewDatePtBR(datetoday())

    section.innerHTML = ''
    hh1.innerHTML = `${nv[1]} ${nv[0]}`
    section.appendChild(hh1)
}