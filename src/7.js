const age = prompt("What is your age ?");

if ((age <= 14) || (age >= 90)) {
    console.log("Not in range");
}

if (!((age >= 14) && (age <= 90))) {
    console.log("Not in range");
}