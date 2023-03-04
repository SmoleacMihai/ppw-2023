// Дан инпут(type=text). Разрешить вводить в инпут только числа (целые и дробные).

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter a number";
document.body.appendChild(input);

input.addEventListener("keypress", (e) => {
  const isNum = /^\d+$/.test(e.key);
  
  if (!isNum) {
    e.preventDefault();
  }
});