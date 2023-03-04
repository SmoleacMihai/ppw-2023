// Создайте 2 объекта person со следующей структурой:
// {
// 	name: `Person`,
// 	age: 123,
// 	salary: 1542.33,
// 	contacts: {
// 		phone: `112`,
// 		email: ‘email@domain.com’
// },
// address: `Moldova`
// }

// Напишите метод Intersection который получит на входе эти 2 объекта и вернет новый объект только из тех полей значение 
// которых равна уо обоих объектов.

const person1 ={
    name: `Dima`,
    age: 20,
    salary: 0,
    birthday:{
        date : 21,
        month : 9,
        year : 2001
    },
    contacts: {
        phone: `068114771`,
        email: "cojocarida@gmail.com"
    },
    address: `Moldova`
}

const person2 = {
    name: `Mihai`,
    age: 19,
    salary: 0,
    birthday:{
        date : 21,
        month : 11,
        year : 2002
    },
    contacts: {
        phone: `068114771`,
        email: "cojocarida@gmail.com"
    },
    address: `Moldova`
}

let result = {};

const Intersection = (object, obejct2) => {
    const result = {};

    for (const key in object) {
        if (object[key] === obejct2[key]) {
            result[key] = object[key];
        }
    }

    return result;
}

result = Intersection(person1, person2);

// console.log(person1);
console.log(result);

// recursion