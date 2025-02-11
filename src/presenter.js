import sumar from "./sumador";
import multiplicar from "./multiplicador";

const form = document.querySelector("#sumar-form");
const form2 = document.querySelector("#multip-form");

const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado-multiplicar");
                                  
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(document.querySelector("#primer-numero").value);
  const secondNumber = Number.parseInt(document.querySelector("#segundo-numero").value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(document.querySelector("#primer-num-multip").value);
  const secondNumber = Number.parseInt(document.querySelector("#segundo-num-multip").value);

  div2.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
