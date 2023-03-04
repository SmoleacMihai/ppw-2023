const username = "John";
const password = "12345";

const inputUsername = prompt("What is your username ?");
const inputPassword = prompt("What is your password ?");

if (username === password) {
    console.log("Hi");
}

if ((inputUsername === username) && (inputPassword !== password)) {
    console.log("Wrong password!");
}

if (inputUsername !== username) {
    console.log("Wrong username!")
}

if ((inputUsername === "") || (inputPassword === "")) {
    console.log("You didnt input username or password");
}