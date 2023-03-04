const sumInputNumbers = () => {
    const array = [];
    let input;

    do {
        input = prompt("Number pls")
        input = parseInt(input);

        if (isNaN(input)) {
            break;
        }

        array.push(input)
        
    } while (!isNaN(input));
    
    console.log(array);
    
    return array.reduce((sum, curent) => sum + curent, 0);

}
console.log(sumInputNumbers());