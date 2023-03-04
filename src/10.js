import { task_10_constructor } from "./dom_constructor.js";

// Добавьте в страницу 2 элемента: field и ball
// <div id=”field”>		
// 	<div id=”ball”></div>
// </div>
// Установите при помощи CSS размеры поля (600*400) и размеры мяча (50*50)
// Напишите код JS который расположит мяч в центр поля.

// Примечания:
// код должен работать для любых размеров поля и мяча
// попробуйте расположить мяч в каждом из углов поля

task_10_constructor();

const field = document.getElementById('field');
const ball = document.getElementById('ball');

const center = document.getElementById("center");
const leftUp = document.getElementById("leftUp");
const rightUp = document.getElementById("rightUp");
const leftDown = document.getElementById("leftDown");
const rightDown = document.getElementById("rightDown");

center.onclick = () => {
  ball.className = "centered";
};

leftUp.onclick = () => {
  ball.className = "leftUp";
};

leftDown.onclick = () => {
  ball.className = "leftDown";
};

rightUp.onclick = () => {
  ball.className = "rightUp";
};

rightDown.onclick = () => {
  ball.className = "rightDown";
}