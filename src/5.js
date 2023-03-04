const convert = (fn, arr) => {
    return arr.map(element => fn(element));
}

const square = (x) => {
    return x * x;
}

console.log(convert(square, [1, 2, 3, 4]));  // [1, 4, 9, 16]
console.log(convert(square, []));

const arr = [1, 2, 3];
console.log(convert(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]