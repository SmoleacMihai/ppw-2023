// Сразу после открытия документа, установить красный цвет фона страницы.
// (задачи 1-4 выполнить в одном документе)


const chanageBgRed = () => {
  document.querySelector("body").style.backgroundColor = "red";
}

// document.onload = chanageBgRed();

document.addEventListener("DOMContentLoaded", () => {
  chanageBgRed();
});