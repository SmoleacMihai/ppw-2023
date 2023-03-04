// Convert the following JSON to JavaScript object and display the result in the console.
// {“name”: “Ion Creanga”, “age”: 123}


const jsonObj = `{"name": "Ion Creanga", "age": 123}`;
const obj = JSON.parse(jsonObj);

console.log(obj);