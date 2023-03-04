// Дан инпут. В него вводится число. По потери фокуса сделайте так, 
// чтобы если в инпут введено недействительное число, значение инпута обнуляется.

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter a number";
document.body.appendChild(input);

input.addEventListener("blur", () => {
  const isNum = /^\d+$/.test(input.value);
  if (!isNum) {
      input.value= "";
  }
});