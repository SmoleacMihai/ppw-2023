const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const zeros = [0, 0, 0];

arr.splice(4, 0, ...zeros);
console.log(arr);