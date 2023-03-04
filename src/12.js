// Write a function called displayName() that takes an object as an argument and prints the person's first name, last name and company. Use object destructuring in the function argument. And also, use template strings when printing the first and last name.
// Example:

// const person = {
//     first: 'Ion',
//     last: 'Creanga',
//     company: 'Amintiri din copilarie SRL'
// }
// displayName(person);

// Result must be: 
// Name: Ion Creanga, Company: Amintiri din copilarie SRL


const person = {
    first: 'Ion',
    last: 'Creanga',
    company: 'Amintiri din copilarie SRL'
};

const displayName = ({first, last, company}) =>{
    console.log(`Name: ${first} ${last}, Company: ${company}`);
};

displayName(person);