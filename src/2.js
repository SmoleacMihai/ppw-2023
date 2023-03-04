const arr = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];
const maxim = Math.max(...arr);
const minim = Math.min(...arr);

console.log("Lower than 5");
arr.forEach((element) => {
    if (element < 5) {
        console.log(element); 
    }
});

// console.log("\nMaxim and minim");
// for (const id in arr) {
    // console.log(id);
    // console.log(arr[id]);
    // console.log(maxim);
//     if (arr[id] == maxim) {
//         console.log(`Id elementului maxim este: ${id}`);
//     }
//     if (arr[id] == minim) {
//         console.log(`Id elementului minim este: ${id}`);
//     }
// }

arr.forEach((element, index) => {
    if (element === maxim) {
        console.log(`Id elementului maxim este: ${index}`);
    }
    if (element === minim) {
        console.log(`Id elementului minim este: ${index}`);
    }
});