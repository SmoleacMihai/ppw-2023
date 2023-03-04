import { task_8_constructor } from "./dom_constructor.js";

// Добавить в странице нумерованный список(ol), поле ввода имени(input) и кнопку.
// При нажатии на кнопку:
// значение из инпута добавляется в список (в конце)
// инпут очистить от текста
// добавление будет работать только если в инпут что то введено. если в инпуте ничего нет, кнопка должна быть неактивной.
// 	При нажатии на li, выводить алерт с текстом который содержится внутри него.

task_8_constructor();

const btn = document.getElementById("addName");
    
const addNameToList = () => {
    const name = document.getElementById("inputName");
    const list = document.getElementById("listOfNames");

    console.log("Am intrat");

    if (name.value) {
      const li = document.createElement("li");
      li.innerText = name.value;
      list.appendChild(li);
      
      name.value = "";
    }
}

btn.addEventListener("click", () => {
  addNameToList();
});