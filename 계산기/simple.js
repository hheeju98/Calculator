import { calculation } from "./calculation.js";
import { isOperator } from "./isOperator.js";
export let currentOperator = "";
export let one = "";
export let two = "";
export let result = "";
export let operatorClicked = true;

export function simple(e) {
  const inputField = document.querySelector(".inputField");
  const outputField = document.querySelector(".outputField");
  const clickedValue = e.target.innerText;

  if (isOperator(clickedValue) == true && one !== "" && operatorClicked) {
    currentOperator = clickedValue;
    operatorClicked = false;
    outputField.value += clickedValue;
  } else if (!isNaN(clickedValue) && currentOperator === "") {
    one += clickedValue;
    outputField.value += clickedValue;
    operatorClicked = true;
  } else if (!isNaN(clickedValue) && currentOperator !== "" && one !== "") {
    two += clickedValue;
    result = calculation(one, currentOperator, two);
    two = "";
    one = result;
    operatorClicked = true;
    outputField.value += clickedValue;
  } else if (clickedValue === "c") {
    currentOperator = "";
    one = "";
    two = "";
    inputField.value = "";
    outputField.value = "";
    operatorClicked = true;
  } else if (clickedValue === "=") {
    inputField.value = result;
    outputField.value = "";
    operatorClicked = true;
  }
}
