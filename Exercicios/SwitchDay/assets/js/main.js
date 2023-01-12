function getWeekDay(weekDay){
    let weekDayText;

    switch (weekDay) {
        case 0:
            weekDayText = 'Domingo';
            return weekDayText;
        case 1:
            weekDayText = 'Segunda-Feira';
            return weekDayText;
        case 2:
            weekDayText = 'Terça-Feira';
            return weekDayText;
        case 3:
            weekDayText = 'Quarta-Feira';
            return weekDayText;
        case 4:
            weekDayText = 'Quinta-Feira';
            return weekDayText;
        case 5:
            weekDayText = 'Sexta-Feira';
            return weekDayText;
        case 6:
            weekDayText = 'Sábado';
            return weekDayText;
        default:
            weekDayText = '';
            return weekDayText;
    }
}

const data = new Date ('1987-04-24 00:00:21');
const weekDay = data.getDay();
let weekDayText = getWeekDay(weekDay)

console.log(weekDay, weekDayText)