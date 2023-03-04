const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const extract = (arr, start, end) => {
    return arr.slice(start, end);
}

console.log(extract(arr, 1, 5));