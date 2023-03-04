const colors = ["red", "green", "blue"];
const whatColor = prompt("Choose a color!");

const checkColor = (arr, color) => {      
    return arr.indexOf(color);
}

alert(checkColor(colors, whatColor));