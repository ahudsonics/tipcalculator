const form = document.querySelector("form");
const output = document.querySelector(".output");
console.log(form);
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const cost = document.querySelector("#billAmount");
  console.log(cost.value * 0.15);
  let tipAmount = cost.value * 0.15;
  let tipPercentage = 15;
  let temp = `<h3>You should tip ${tipPercentage}% ($${tipAmount.toFixed(2)}) on $${cost.value}</h3>`;
  output.innerHTML = temp;
});


