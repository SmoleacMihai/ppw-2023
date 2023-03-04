import { task_4_constructor } from "./dom_constructor.js";

// Добавить в странице нумерованный список(ol). После открытия страницы, каждые 2 секунды, 
// в список добавится новый элемент (li) с текстом `Элемент ${i}`.
// Заполнение списка остановится когда в списке будет 20 элементов.
// У четных элементов будет зеленый фон а у нечетных фиолетовый.

const createList = () => {
  let i = 0

  task_4_constructor();

  const interval = setInterval( () => {
    const element = document.getElementById("list");

    i++;

    const li = document.createElement("li");
    li.innerText = `Element ${i}`;
    element.appendChild(li);

    // element.innerHTML += `<li>Element ${i}</li>`;
    
    if (i === 20) {
      clearInterval(interval);
    }
  }, 2000)
}

document.addEventListener("DOMContentLoaded", () => {
  createList();
});