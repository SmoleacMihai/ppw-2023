import { task_5_constructor } from "./dom_constructor.js";

// Добавить в страницу следующие элементы (кнопка, инпут, кнопка)

// Задачи:
// При нажатии на `-`, значение из инпута уменьшается на 1 
// При нажатии на `+`, значение из инпута увеличивается на 1
// Вручную в инпут вводить нельзя.
// инпут может получить только значения из интервала 0-9
// если в инпут 0, кнопку `-` сделать неактивной
// если в инпут 9, кнопку `+` сделать неактивной
// использовать getElementById

// PS: нельзя писать onclick в HTML документе. Весь код должен быть в отдельном JS файле 
// (это относится ко всем следующим задачам).

task_5_constructor();

const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

const plus1 = () => {
  if (counter.value < 9) {
    counter.value = Number(counter.value) + 1;
  }
}

const minus1 = () => {
  if (counter.value > 0 ) {
    counter.value = Number(counter.value) - 1;
  }
}

// navernoe mojno Number(counter.value) -= 1;

// increment.onclick = plus1;
// decrement.onclick = minus1;

increment.addEventListener('click', () => {
  plus1();
});

decrement.addEventListener('click', () => {
  minus1();
});