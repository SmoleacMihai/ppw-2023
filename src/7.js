const person = {
    name: `Person`,
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: `112`,
        email: "email@domain.com"
    },
    address: `Moldova`,

    get getName(){
        return person.name
    },

    get getAge(){
        return person.age            
    },

    get getSalary(){
        return person.salary            
    },

    get getPhone(){
        return person.contacts.phone            
    },

    get getEmail(){
        return person.contacts.email            
    },

    get getAdress(){
        return person.address            
    }
    
};

console.log(person.getName);
console.log(person.getAge);
console.log(person.getSalary);
console.log(person.getPhone);
console.log(person.getEmail);
console.log(person.getAdress);