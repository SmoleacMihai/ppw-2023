import { task_6_constructor } from "./dom_constructor.js";

// Добавить в страницу таблицу 8*8. При помощи JS кода закрасить цвет фона чтобы получилась шахматная доска.
// Использовать querySelector*

task_6_constructor();

// make chess board

const blackSquare = document.querySelectorAll('.blackSquare');
const whiteSquare = document.querySelectorAll('.whiteSquare');

for (const square of blackSquare) {
  square.classList.add('black');
}

for (const square of whiteSquare) {
  square.classList.add('white');
}
// blackSquare.forEach(item => {
//   item.style.backgroundColor = '#259';
// });

// whiteSquare.forEach(item => {
//   item.style.backgroundColor = '#ff9';
// });