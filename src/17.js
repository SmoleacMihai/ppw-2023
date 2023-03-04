// Дан элемент #elem. При клике на него, получите его ширину и высоту, 
// без учета границы и padding и выводите в alert.
// После каждого нажатия, размеры элемента увеличиваются в 2 раза.

const elem = document.createElement('div');
elem.id = 'elem';
elem.style.width = '100px';
elem.style.height = '100px';
elem.style.border = '1px solid black';
document.body.appendChild(elem);

elem.addEventListener("click", () => {
    alert(`width: ${elem.style.width}, height: ${elem.style.height}`);

    elem.style.width = `${Number(elem.style.width.slice(0, -2)) * 2}px`;
    elem.style.height = `${Number(elem.style.height.slice(0, -2)) * 2}px`;
});