import {
  totalArray,
  totalData,
  numberArray,
  calculateArray,
} from "./simple.js";
import { calculation } from "../calculation/calculation.js";
import { isOperator } from "../calculation/calculation.js";
import { includePriority } from "./priority.js";
export let one = "";
export let operatorClicked = true;
export let two = "";
export let result = "";
export let currentOperator = "";

export function click(click) {
  const inputField = document.querySelector(".inputField");
  const outputField = document.querySelector(".outputField");

  if (
    click !== "del" &&
    click !== "c" &&
    click !== "Delete" &&
    click !== "Shift" &&
    click !== "Backspace"
  ) {
    totalArray.push(totalData);
  }
  if (!isNaN(click)) {
    numberArray.push(totalData);
  }

  if (isOperator(click) == true && one !== "" && operatorClicked == true) {
    currentOperator = click;
    outputField.value += click;
    operatorClicked = false;
  } else if (
    !isNaN(click) &&
    currentOperator === "" &&
    inputField.value == ""
  ) {
    one += click;
    outputField.value += click;
    operatorClicked = true;
  } else if (!isNaN(click) && currentOperator !== "" && one !== "") {
    two += click;
    result = calculation(one, currentOperator, two);
    two = "";
    one = result;
    operatorClicked = true;
    outputField.value += click;

    if (inputField.value !== "" && isOperator(click)) {
      outputField.value += click;
    }
  } else if (click === "c") {
    currentOperator = "";
    one = "";
    two = "";
    inputField.value = "";
    outputField.value = "";
    operatorClicked = true;
    totalArray.length = 0;
    calculateArray.length = 0;
  } else if (click === "=" && !isNaN(totalArray[totalArray.length - 2].value)) {
    inputField.value = result;
    outputField.value = "";
    operatorClicked = true;

    if (includePriority(totalArray) !== -1 && numberArray.length > 2) {
      const operatorIndex = includePriority(totalArray);
      if (operatorIndex >= 0) {
        const prevNumberIndex = totalArray[operatorIndex].no - 1;
        const nextNumberIndex = totalArray[operatorIndex].no + 1;
        const prevNumber = totalArray[prevNumberIndex].value;
        const nextNumber = totalArray[nextNumberIndex].value;
        calculateArray.push(
          prevNumber,
          totalArray[operatorIndex].value,
          nextNumber
        );

        const result = calculation(
          prevNumber,
          totalArray[operatorIndex].value,
          nextNumber
        );

        totalArray.splice(
          includePriority(totalArray) - 1,
          includePriority(totalArray) + 2,
          result
        );

        const finalArray = totalArray.map((item) => {
          if (typeof item === "object") {
            return item.value;
          } else if (typeof item === "number") {
            return String(item);
          }
        });

        const finalResult = calculation(
          finalArray[0],
          finalArray[1],
          finalArray[2]
        );

        inputField.value = finalResult;
        totalArray.length = 0;
        numberArray.length = 0;
        calculateArray.length = 0;
      }
    }
  }
}
