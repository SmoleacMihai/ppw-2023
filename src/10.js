const arr =  [8, 7,  2,  2,  3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

const uniqueSort = (arr) => {
    const sortedArr = [...new Set(arr)];
    return sortedArr;
}
console.log(uniqueSort(arr));