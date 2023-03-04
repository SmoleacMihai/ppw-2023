const weekDays = {
    "Mo": "Понедельник",
    "Tu": "Вторник",
    "We": "Среда",
    "Th": "Четверг",
    "Fr": "Пятница",
    "Sa": "Суббота",
    "Su": "Воскресенье",
}

const romanianWeekDays = {
    "Mo": "Luni",
    "Tu": "Marti",
    "We": "Miercuri",
    "Th": "Joi",
    "Fr": "Vineri",
    "Sa": "Sambata",
    "Su": "Duminica",
}

const translate = (weekDays, romanianWeekDays) => {
    const result = {};

    for (const key in weekDays) {
        result[key] = romanianWeekDays[key];
    }
    
    return result;
}

console.log(translate(weekDays, romanianWeekDays));