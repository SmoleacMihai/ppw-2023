// Создать массив который содержит минимум 5 учеников  (алгоритм должен работать для любого количества учеников) и их оценки (минимум 4 оценки)

// [
//  {
// 	name: “First”,
// 	marks: [8, 10, 7, 5, 4]
//  }
// ]

// Написать следующие функции обработки этого массива: 
// считает среднюю оценку и выводит имя и среднюю оценку для каждого элемента массива
// выводит учеников  у которых средняя оценка < 5(со средней оценкой <5)
// находит учеников с максимальной и минимальной средней оценкой
// сортирует учеников по средней оценке по убыванию (с самой большой средней в начале, с наименьшим в конце списка)
// выводит тех учеников чья средняя оценка больше средней оценки всего класса

const students = [ 
    {
        name: "Mihai",
        marks: [9, 6, 10, 7, 10],
    },
    {
        name: "Dmitri",
        marks: [10, 5, 7, 8, 10]
    },
    {
        name: "Corina",
        marks: [9, 8, 8, 9, 10, 9]
    },
    {
        name: "Alexandru",
        marks: [4, 2, 5, 3, 5, 6]
    },
    {
        name: "Daniel",
        marks: [6, 8, 5, 10, 6, 8]
    },
    {
        name: "Maxim",
        marks: [6, 4, 5, 2, 6, 3]
    }
];

// Shows the name and average of all students
students.forEach((student) => {
    student.average = parseFloat(student.marks.reduce((sum, curent) => sum + curent, 0) / student.marks.length).toFixed(2);
    // student.average = parseFloat(student.average).toFixed(2);
    // student.average = parseFloat(student.average);
    // console.log(typeof(student.average));
    console.log(student.name + ": " + student.average);
});

console.log("\n");

// Shows the students with average lower than 5
students.forEach(({name, marks, average}) => {
    if (average < 5) {
        console.log(name, marks, average, "\n");
    }
});

console.log("\n");

// Shows the student with highest average and lowerest average
const arrayOfAverages = students.map(object => object.average)
const maxAverage = Math.max(...arrayOfAverages)
const minAverage = Math.min(...arrayOfAverages)

students.forEach(({name, marks, average}) => {
    if (average === maxAverage) {
        console.log("Student with highest average: ");
        console.log(name);
        console.log(marks);
        console.log(average);
        console.log("\n");
    }
    if (average === minAverage) {
        console.log("Student with lowest average: ");
        console.log(name);
        console.log(marks);
        console.log(average);
        console.log("\n");
    }
});

console.log("\n")

// Sorts student by average
console.log(students);

const sortedStudents = students.sort((a, b) => b.average - a.average);

console.log(sortedStudents);




// Shows the students with sorted averages
sortedStudents.forEach( ({name, marks, average}) => {
    console.log(`\n${name} \n ${marks} \n ${average}`);
});

console.log("\n");

const average = students.map(object => object.average).reduce((sum, curent) => sum + curent, 0)/students.length;

console.log("Average of class: " + average);
console.log("\n");

const studentsWithAverageHigherThanAverageOfClass = students.filter(student => student.average > average);

studentsWithAverageHigherThanAverageOfClass.forEach(({name, marks, average}) => {
    console.log(name);
    console.log(marks);
    console.log(average);
    console.log("\n");
});