// Через 3 секунды после загрузки страницы, установить цвет фона в зеленый.

const changeBgGreen = () => {
  document.querySelector("body").style.backgroundColor = "green";
}

const delayedBgChange = () => {
 setTimeout(changeBgGreen, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  delayedBgChange();
});

// document.onload = delayedBgChange();