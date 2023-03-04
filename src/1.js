const n = 5;
const arr = [];

for (let i = 0; i <= n; i++) {
    arr[i] = i + 3;
}

// 1
console.log(arr);

// 2
console.log("\nFor output");

for (let i = 0; i <= n; i++) {
    console.log(arr[i]);
}

console.log("\nWhile output");

let i = 0;

while (i != n) {
    console.log(arr[i]);
    i++;
}

console.log("\nDo while output");

i = 0;

do {
    console.log(arr[i]);
    i++;
} while (i !== n);

// 3
console.log("\nFor in output");

for (const id in arr) {
    console.log(arr[id]);
}

// 4
console.log("\nFor of output");

for (const element of arr) {
    console.log(element);
}

// 5
console.log("\nFor each output");

arr.forEach((element, index) => {
    console.log(index, element);
    
});

console.log("\nMap output")
const copyArr = arr.map((element) => {console.log(element)});

// forEach in my opinion is the best