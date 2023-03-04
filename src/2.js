const a = 4;
const b = 18;
let sumEven = 0;

for (let i = a; i <= b; i++) {
    if (a % 2 != 0) {
        sumEven += i;
    }
}

console.log(sumEven);