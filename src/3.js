import {task_3_constructor} from "./dom_constructor.js";

// Добавить кнопку с текстом Orange, при нажатии на которой, цвет страницы становится оранжевым.

task_3_constructor();

const changeBgOrange = () => {
  document.querySelector("body").style.backgroundColor = "orange";
}

document.querySelector("button").addEventListener("click", () => {
  changeBgOrange();
});

// element.onclick = changeBgOrange;