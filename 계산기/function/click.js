import {
  totalArray,
  totalData,
  numberArray,
  calculateArray,
} from "./simple.js";
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

export function click(click) {
  if (
    click !== "del" &&
    click !== "c" &&
    click !== "Delete" &&
    click !== "Shift" &&
    click !== "Backspace"
  ) {
    totalArray.push(totalData);
    outputField.value += totalData.value;
  }
  if (!isNaN(click)) {
    numberArray.push(totalData);
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
    console.log(two);
    let result = calculation(one, currentOperator, two);
    arr.splice(0, 3, result);

    one = result;
    console.log(one);
    two = "";

    if (arr.length >= 4) {
      allocate(arr);
    }
    // two = arr[2];

    inputField.value = one;
    currentOperator = arr[1];
    // result = calculation(one, currentOperator, two);
    // operatorClicked = true;
    // outputField.value = arr;
    // inputField.value = result;
    if (inputField.value !== "" && isOperator(click)) {
      outputField.value += click;
    }
  }

  console.log(result);
  outputField.value = "";
  operatorClicked = true;
  console.log(typeof result);
}
