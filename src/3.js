const styles = ["Jazz", "Bluzz"];
console.log(styles);

styles.push("Rock and Roll");
console.log(styles);

const middle = Math.floor(styles.length / 2);
console.log(middle);

styles[middle] = "Classic";
console.log(styles);

const firstElement = styles.shift()
console.log(firstElement);

styles.unshift("Rap", "Raggy")
console.log(styles);