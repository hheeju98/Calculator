import { isOperator } from "../calculation/calculation.js";
import { calculation1 } from "../calculation/calculation.js";
import { Remove } from "./remove.js";
import { includePriority } from "./priority.js";
import { calculation } from "../calculation/calculation.js";
import { totalArray, numberArray, calculateArray } from "./simple.js";

export let one = "";
export let operatorClicked = true;
export let two = "";
export let result = "";
export let currentOperator = "";

export function simple1(e) {
  let clickedValue1 = e.key;
  const inputField = document.querySelector(".inputField");
  const outputField = document.querySelector(".outputField");

  let type;

  if (!isNaN(clickedValue1)) {
    type = "number";
  } else {
    type = "string";
  }
  e.preventDefault();

  const totalData = {
    value: clickedValue1,
    type: type,
    no: totalArray.length,
  };

  if (
    clickedValue1 !== "del" &&
    clickedValue1 !== "c" &&
    clickedValue1 !== "Delete" &&
    clickedValue1 !== "Shift" &&
    clickedValue1 !== "Backspace"
  ) {
    totalArray.push(totalData);
  }

  if (!isNaN(clickedValue1)) {
    numberArray.push(totalData);
  }

  if (
    isOperator(clickedValue1) == true &&
    one !== "" &&
    operatorClicked == true
  ) {
    currentOperator = clickedValue1;
    outputField.value += clickedValue1; //왜 두개씩 나오지
    operatorClicked = false;
  } else if (
    !isNaN(clickedValue1) &&
    currentOperator === "" &&
    inputField.value == ""
  ) {
    one += clickedValue1;
    outputField.value += clickedValue1;
    operatorClicked = true;
  } else if (!isNaN(clickedValue1) && currentOperator !== "" && one !== "") {
    two += clickedValue1;
    result = calculation1(one, currentOperator, two);
    two = "";
    one = result;
    console.log(one);
    operatorClicked = true;
    outputField.value += clickedValue1;

    if (inputField.value !== "" && isOperator(clickedValue1)) {
      outputField.value += clickedValue1;
    }
  } else if (clickedValue1 === "c") {
    currentOperator = "";
    one = "";
    two = "";
    inputField.value = "";
    outputField.value = "";
    operatorClicked = true;
    totalArray.length = 0;
    calculateArray.length = 0;
  } else if (clickedValue1 === "Delete" || clickedValue1 === "Backspace") {
    Remove();
  } else if (
    clickedValue1 === "=" &&
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

        const result = calculation1(
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

        const finalResult = calculation1(
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
