// Convert the following JavaScript object to JSON and display the result in the console.
// const power={voltage: 250,current: 12}

const power = {
  voltage: 250,
  current: 12
}

const powerJson = JSON.stringify(power);

console.log(powerJson);