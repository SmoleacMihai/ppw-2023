// Задан объект
// const weekDays = {
// 	“Luni”: “Mo”,
// 	“Marti”: “Tu”,
// 	“Miercuri”: “We”,
// 	“Joi”: “Th”,
// 	“Vineri”: “Fr”,
// 	“Simbata”: “Sa”,
// 	“Duminica”: “Su”
// }
// Напишите функцию которая получит как параметр этот объект и вернет следующий объект
// const weekDays = {
// 	“Mo”: “Luni”,
// 	“Tu”: “Marti”,
// 	“We”: “Miercuri”,
// 	“Th”: “Joi”,
// 	“Fr”: “Vineri”,
// 	“Sa”: “Simbata”,
// 	“Su”: “Duminica”
// }
// Придумайте подходящее название для этой функции.


const weekDays = {
    "Luni":     "Mo",
    "Marti":    "Tu",
    "Miercuri": "We",
    "Joi":      "Th",
    "Vineri":   "Fr",
    "Simbata":  "Sa",
    "Duminica": "Su"
}

const switchKeyWithAtributes = (obj) => {
    let result = {};
    for (const key in obj) {
        result[obj[key]] = key;
    }
    return result;
}

console.log(switchKeyWithAtributes(weekDays))