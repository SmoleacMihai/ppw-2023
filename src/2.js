const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
  
const sum = Object.values(salaries).reduce((acc, cur) => acc + cur, 0);
// peredelati objects values and reduce DONE
console.log(sum);