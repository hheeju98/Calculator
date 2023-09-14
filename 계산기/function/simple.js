import { isOperator } from "../calculation/calculation.js";
import { calculation1 } from "../calculation/calculation.js";
import { Remove } from "./remove.js";
import { includePriority } from "./priority.js";
import { calculation } from "../calculation/calculation.js";
import { simple1 } from "./keyEvent.js";

export let one = "";
export let operatorClicked = true;
export let two = "";
export let result = "";
export let currentOperator = "";
// 분산

const totalArray = [];
const numberArray = [];
const calculateArray = [];
export { totalArray, numberArray, calculateArray };

export function simple(e) {
  const clickedValue = e.target.innerText;
  const inputField = document.querySelector(".inputField");
  const outputField = document.querySelector(".outputField");

  let type;

  if (!isNaN(clickedValue)) {
    type = "number";
  } else {
    type = "string";
  }

  const totalData = {
    value: clickedValue,
    type: type,
    no: totalArray.length,
  };

  console.log(totalData);
  if (clickedValue !== "del") {
    totalArray.push(totalData);
  }

  if (!isNaN(clickedValue)) {
    numberArray.push(totalData);
  }

  if (
    isOperator(clickedValue) == true &&
    one !== "" &&
    operatorClicked == true
  ) {
    currentOperator = clickedValue;
    outputField.value += clickedValue;
    operatorClicked = false;
  } else if (
    !isNaN(clickedValue) &&
    currentOperator === "" &&
    inputField.value == ""
  ) {
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

    if (inputField.value !== "" && isOperator(clickedValue)) {
      outputField.value += clickedValue;
    }
  } else if (clickedValue === "c") {
    currentOperator = "";
    one = "";
    two = "";
    inputField.value = "";
    outputField.value = "";
    operatorClicked = true;
    totalArray.length = 0;

    calculateArray.length = 0;
  } else if (
    clickedValue === "=" &&
    !isNaN(totalArray[totalArray.length - 2].value)
  ) {
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
