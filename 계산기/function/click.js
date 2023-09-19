import { totalArray, numberArray, calculateArray } from "./simple.js";
import { calculation } from "../calculation/calculation.js";
import { isOperator } from "../calculation/calculation.js";
import { includePriority } from "./priority.js";
import { simple1 } from "./keyEvent.js";
import { Remove } from "./remove.js";

export let one = "";
export let operatorClicked = true;
export let two = "";
export let result = "";
export let currentOperator = "";

const inputField = document.querySelector(".inputField");
const outputField = document.querySelector(".outputField");

export function click(click, Data) {
  if (
    click !== "del" &&
    click !== "c" &&
    click !== "Delete" &&
    click !== "Shift" &&
    click !== "Backspace"
  ) {
    totalArray.push(Data);
    outputField.value += Data.value;
  }
  if (!isNaN(click)) {
    numberArray.push(Data);
  } else if (click === "c") {
    currentOperator = "";
    one = "";
    two = "";
    inputField.value = "";
    outputField.value = "";
    operatorClicked = true;
    totalArray.length = 0;
    calculateArray.length = 0;
  } else if (click === "=") {
    const calculateArray = totalArray.map((item) => {
      if (typeof item === "object") {
        return item.value;
      } else if (typeof item === "number") {
        return item;
      }
    });

    allocate(calculateArray);

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

function allocate(arr) {
  if (
    !isNaN(arr[0])
    // currentOperator === "" &&
    // inputField.value == ""
  ) {
    one = arr[0];
    currentOperator = arr[1];
    outputField.value += arr;
    operatorClicked = false;
    // if (!isNaN(totalArray[2].value) && currentOperator !== "" && one !== "") {
    two = arr[2];
    let result = calculation(one, currentOperator, two);
    arr.splice(0, 3, result);

    one = result;
    two = "";

    if (arr.length >= 4) {
      allocate(arr);
    }
    inputField.value = one;
    currentOperator = arr[1];
    if (inputField.value !== "" && isOperator(click)) {
      outputField.value += click;
    }
  }

  outputField.value = "";
  operatorClicked = true;
}
