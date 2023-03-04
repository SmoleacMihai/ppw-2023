// Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.

const elem = document.getElementById("elem");
elem.previousElementSibling.innerHTML += "!";