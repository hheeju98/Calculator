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
    console.log(totalArray);
  }
  if (!isNaN(click)) {
    numberArray.push(totalData);
    console.log(totalArray[0]);
    console.log(totalArray.values);
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
    console.log(calculateArray[0]);
    console.log(calculateArray);

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

// if (isOperator(click) == true && one !== "" && operatorClicked == true) {
//   currentOperator = click;
//   outputField.value += click;
//   operatorClicked = false;
// } else if (!isNaN(click) && currentOperator === "" && inputField.value == "") {
//   // 제일 첫번째 값이 숫자일때 one이다
//   one += click;
//   outputField.value += click;
//   operatorClicked = true;
//   // 3+4*5+3
// } else if (!isNaN(click) && currentOperator !== "" && one !== "") {
//   // 두번째 숫자가 있을 경우 그 값은 two
//   // 결과 계산 -> 결과를 one에 넣기
//   two += click;
//   result = calculation(one, currentOperator, two);
//   two = "";
//   one = result;
//   operatorClicked = true;
//   outputField.value += click;

//   if (inputField.value !== "" && isOperator(click)) {
//     outputField.value += click;
//   }
// }

function allocate(arr) {
  if (
    !isNaN(arr[0])
    // currentOperator === "" &&
    // inputField.value == ""
  ) {
    one = arr[0];
    console.log(one);
    currentOperator = arr[1];
    // console.log(currentOperator);
    outputField.value += arr;
    operatorClicked = false;

    // if (!isNaN(totalArray[2].value) && currentOperator !== "" && one !== "") {
    two = arr[2];
    console.log(two);
    result = calculation(one, currentOperator, two);
    arr.splice(0, 3, result);
    console.log(arr);
    console.log(arr[2]);
    console.log(result);
    one = result;
    console.log(one);
    two = "";
    two = arr[2];

    currentOperator = arr[1];
    result = calculation(one, currentOperator, two);
    console.log(result);
    console.log(currentOperator);
    console.log(typeof one);
    console.log(totalArray);
    console.log(result);
    operatorClicked = true;
    outputField.value = arr;

    if (inputField.value !== "" && isOperator(click)) {
      outputField.value += click;
    }
  }

  inputField.value = result;
  outputField.value = "";
  operatorClicked = true;
  console.log(typeof result);
}
