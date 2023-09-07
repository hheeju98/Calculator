import { calculation } from "./calculation.js";
import { isOperator } from "./isOperator.js";

let one = "";
let operatorClicked = true;
let two = "";
let result = "";
let currentOperator = "";
const operatorArray = []; // 함수 외부에 선언된 변수는 함수 호출간에 계속해서 유지되어 데이터가 누적된다.
const numberArray = [];
const totalArray = [];
const calculateArray = [];

export function simple(e) {
  const inputField = document.querySelector(".inputField");
  const outputField = document.querySelector(".outputField");
  const clickedValue = e.target.innerText;

  const totalData = {
    value: clickedValue,
    type: typeof clickedValue,
    no: totalArray.length,
  };
  totalArray.push(totalData);
  console.log(totalArray);

  const operatorData = {
    value: clickedValue,
    type: typeof clickedValue,
    no: operatorArray.length,
  };

  const numberData = {
    value: clickedValue,
    type: typeof clickedValue,
    no: numberArray.length,
  };

  if (isOperator(clickedValue)) {
    operatorArray.push(operatorData);
  }
  console.log(operatorArray);

  if (!isNaN(clickedValue)) {
    numberArray.push(numberData);
  }
  console.log(numberArray);

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
  } else if (clickedValue === "=") {
    inputField.value = result;
    outputField.value = "";
    operatorClicked = true;

    if (includePriority(operatorArray) !== -1) {
      const operatorIndex = includePriority(operatorArray);
      console.log(operatorIndex);
      if (operatorIndex >= 0) {
        const prevNumberIndex = numberArray[operatorIndex].no;
        console.log(prevNumberIndex);
        const nextNumberIndex = numberArray[operatorIndex].no + 1;
        console.log(nextNumberIndex);
        const prevNumber = numberArray[prevNumberIndex].value;
        console.log(prevNumber);
        console.log(operatorIndex);
        console.log(operatorArray[operatorIndex].value);
        const nextNumber = numberArray[nextNumberIndex].value;
        console.log(nextNumber);
        calculateArray.push(
          prevNumber,
          operatorArray[operatorIndex].value,
          nextNumber
        );
        console.log(calculateArray);
        const result = calculation(
          prevNumber,
          operatorArray[operatorIndex].value,
          nextNumber
        );
        console.log(result);
        // totalArray[
        //   (numberArray[operatorIndex].no,
        //   numberArray[operatorIndex].no - 1,
        //   numberArray[operatorIndex].no + 1)
        // ] = result;
        console.log(includePriority(totalArray));
        totalArray.splice(
          includePriority(totalArray) - 1,
          includePriority(totalArray) + 2,
          result
        );
        console.log(totalArray);
        totalArray.map((item) => item.value);
        console.log(totalArray);
        // totalArray.length = 0;
        // operatorArray.length = 0;
        // numberArray.lengtrh = 0;
        // calculateArray.length = 0;

        const finalArray = totalArray.map((item) => {
          if (typeof item === "object") {
            return item.value;
          } else if (typeof item === "number") {
            return String(item);
          }
        });

        console.log(finalArray);
      }
    }
  }
}
function includePriority(arr) {
  const index = arr.findIndex(
    (item) => item.value === "×" || item.value === "÷"
  );
  console.log(index);
  return index;
}
// function includePriority(arr) {
//   for (const item of arr) {
//     const index = arr.findIndex(
//       (item) => item.value === "×" || item.value === "÷"
//     );
//     return index;
//   }
// }
// function includePriority(arr) {
//   for (const item of arr) {
//     if (item.value === "×" || item.value === "÷") {
//       return item.index; // 배열에 곱하기 또는 나누기 연산이 포함되어 있으면 true를 반환합니다.
//     }
//   }
// }

// function includePriority() {
//   if (inputArray.some(isPriority) == true) {
//     console.log(true);
//   }
// }

// = 누를시 배열에 객체를 담아서 연산자 찾고 우선순위 (조건문) 그것의 앞의 숫자 계산[{타입, value, no}]
// 조검문(우선 순위 재지정)->return박거나 오브젝트 다시 sort 배열에 map배열에 객체 넣는법 계싼식 -> 연산자를 함수("+")[더하기,나누기,곱하기,빼기] 배열에서 => if("더하기"){
// value.value + value.value
//}if("나누기"){
// value.value / value.value
//}
// 필터로 맨 마지막인 애만 날릴 마지막이 연산자일 경우
//마지막이 숫자여야함
//새 객체 배열에 넣는법
// 함수 배열 추가삭제
//데이터 객체로 받아와요 객체추가 배열 오브젝트 만드는법
//(){}의 차이!

//import없을 경우 어디서 쓰는 변수인지 알기
//계산기 형식 변경 진짜 계산기 처럼-> 제출

// 데이터를 객체로 받기 value에서 연산자만 모아서 저장 연산자 우선순위 지정 배열 변경 이후 순수대로 계싼
// 값으 누를 때 마다 객체에 값이 각각 들어와야 할듯
//split함수 써서 계산해야 할듯?
// ()를 사용해서 우선 순위 명시적으로 지정
// (같은 no의 숫자 연산자 no no+1의 숫자 제일 앞으로 보내기)

// index of 더하기 나누기의 index받아와서 그 값을 배열의 2번째로 같은 no의 숫자를 제일 처음 인덱스로no+1 을 두번째 인덱스로

// calculateArray의 값을 계산해서 결과 값을 totalArray의 해당 식 대신에(곱하기나 나누기의 양옆값) 넣어주고 나머지 계산

// const finalArray = totalArray.map((item) => {
//   if (typeof item === "object") {
//     return item.value;
//     if (!isNaN(item.value)) {
//       return parseInt(value);
//     }
//   } else if (typeof item === "number") {
//     return item;
//   }
// });
