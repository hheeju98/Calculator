import { calculation } from "./calculation.js";
import { isOperator } from "./isOperator.js";
let currentOperator = "";
let one = "";
let two = "";
let result = "";
let operatorClicked = true;

export function simple(e) {
  const inputField = document.querySelector(".inputField");
  const outputField = document.querySelector(".outputField");
  const clickedValue = e.target.innerText;

  if (
    isOperator(clickedValue) == true &&
    one !== "" &&
    operatorClicked == true
  ) {
    currentOperator = clickedValue;
    outputField.value += clickedValue;
    operatorClicked = false;
  } else if (!isNaN(clickedValue) && currentOperator === "" && result == "") {
    one += clickedValue;
    outputField.value += clickedValue;
    operatorClicked = true;
  } else if (!isNaN(clickedValue) && currentOperator !== "" && one !== "") {
    two += clickedValue;
    result = calculation(one, currentOperator, two);
    inputField.value = result;
    outputField.value += clickedValue;
    console.log(outputField.value);
    currentOperator = "";
    two = "";
    one = result;
    operatorClicked = true;
    outputField.value = "";
    console.log(inputField.value);
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
  }
}
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
