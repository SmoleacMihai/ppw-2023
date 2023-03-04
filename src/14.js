// Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. По нажатию на эту кнопку удалите элемент #child.

const parent = document.createElement('div');
parent.id = 'parent';
document.body.appendChild(parent);

const child = document.createElement('div');
child.id = 'child';
child.innerHTML = 'Hello world, pls dont delete me';
parent.appendChild(child);

const child_killer_btn = document.createElement('button');
child_killer_btn.innerHTML = 'Kill child';
document.body.appendChild(child_killer_btn);

child_killer_btn.addEventListener('click', () => {
    parent.removeChild(child);
    parent.innerHTML = "Noo, my child!!"
});