// Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.

const elem = document.createElement('div');
elem.id = 'elem';
document.body.appendChild(elem);

const paragraph = document.createElement('p');
paragraph.innerHTML = 'Hello world';
elem.appendChild(paragraph);

const elemFirstChild = elem.firstElementChild;
elemFirstChild.style.color = 'red';