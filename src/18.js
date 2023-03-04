import { task_18_constructor } from "./dom_constructor.js";

// Дан элемент #player который расположен в странице fixed. 
// Реализовать функционал перемещения этого элемента на странице при помощи клавиатуры(стрелок). 
// Разместить #player2 внутри контейнера #viewport и разрешить перемещение только внутри этого элемента.

task_18_constructor();

const player = document.getElementById("player");
player.style.position = "fixed";

const player2 = document.getElementById("player2");
let positionX = 0;
let positionY = 0;

document.addEventListener("keydown", (e) => {
  console.log(e);
  switch (e.key) {
    case "ArrowLeft":
      positionX -= 15;
      player.style.transform = `translate(${positionX}px, ${positionY}px)`;
      player2.style.transform = `translate(${positionX}px, ${positionY}px)`;
    break;

    case "ArrowUp":
      positionY -= 15;
      player.style.transform = `translate(${positionX}px, ${positionY}px)`;
      player2.style.transform = `translate(${positionX}px, ${positionY}px)`;
    break;
        
    case "ArrowDown":
      positionY += 15;
      player.style.transform = `translate(${positionX}px, ${positionY}px)`;
      player2.style.transform = `translate(${positionX}px, ${positionY}px)`;
    break;
      
    case "ArrowRight":
      positionX += 15;
      player.style.transform = `translate(${positionX}px, ${positionY}px)`;
      player2.style.transform = `translate(${positionX}px, ${positionY}px)`;  
    break;

    default:
      break;
    }
  });