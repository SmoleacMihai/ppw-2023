import { task_19_constructor } from "./dom_constructor.js";

// Есть 2 элемента, #parent-left и #parent-right. 
// Внутри элемента #parent-left, находится элемент #child. 
// Реализовать функционал drag&drop который позволяет перемещать элемент #child между #parent-left 
// и #parent-right через drag&drop.

task_19_constructor();

const dragables = document.querySelectorAll(".draggable");
const parents = document.querySelectorAll(".parent");

dragables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");

      console.log("Drag start");
  });

  draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");

      console.log("drag stoped");
  });
});

parents.forEach(parent => {
    parent.addEventListener("dragover", () => {
        const dragable = document.querySelector(".dragging");

        parent.append(dragable);

        console.log("Drag over a parent");
    });
});