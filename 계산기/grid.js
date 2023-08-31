/*
변경사항
DomContentLoaded 다른 방식으로 변경하기 (js태그가 html하단에 위치해도 동작하도록 주의) window.onload() addEventListener 변경해주기
forEach-> Map으로 변경
함수 모두 표현식으로 변경
switch문 -> if문으로 통일
html td grid/flex형태 수정
계산 함수에 filter findIndex find 적용 reduce도 적용 - 못함
태그 호출 방식 변경
*/

window.onload = () => {
  const inputField = document.getElementById("inputField");
  const outputField = document.getElementById("outputField");
  // 페이지 로드시에 다른방법 태그호출하는 법 다
  //모두 표현식으로 표현식
  let currentNumber = "";
  let currentNumber2 = "";
  let currentOperator = "";

  // td 요소들 가져오기
  const divElements = document.querySelectorAll(".element");
  const divElementsArray = Array.from(divElements);

  //forEach만되는이유
  divElementsArray.map((div) => {
    //에러이유
    div.addEventListener("click", (e) => {
      // console.log(e);
      const clickedValue = e.target.innerText; // this가 가르키는것x
      //   console.log(clickedValue);
      // console.log(typeof e.target.innerText);
      //다른방법
      if (!isNaN(clickedValue)) {
        if (currentOperator === "") {
          // 연산자가 설정되지 않은 경우 currentNumber
          currentNumber += clickedValue;
        } else {
          // 연산자 이후에 숫자를 클릭한 경우 currentNumber2
          //  console.log(clickedValue);
          currentNumber2 += clickedValue;
        }

        const formattedNumber = formatNumber(
          currentOperator === "" ? currentNumber : currentNumber2
        );
        inputField.value = formattedNumber;
      } else if (isOperator4(clickedValue) === true) {
        console.log(isOperator4(clickedValue));
        currentOperator = clickedValue; // 연산자 설정
        outputField.value =
          currentNumber + " " + currentOperator + "" + currentNumber2;
      } else if (clickedValue === "c") {
        console.log(clickedValue);
        currentNumber = "";
        currentNumber2 = "";
        currentOperator = "";
        outputField.value = "";
        inputField.value = ""; //innertext/ value
      } else if (clickedValue === "=") {
        if (currentOperator !== "" && currentNumber2 !== "") {
          const result = calculation(
            parseInt(currentNumber), // 문자 -> 숫자
            currentOperator,
            parseInt(currentNumber2)
          );
          inputField.value = String(result); // HTML출력을 위해
          outputField.value = "";
          currentNumber = ""; // 다음 계산을 위해 초기화
          currentNumber2 = "";
          currentOperator = "";
        }
      }
    });
    // 로드뒤에index.js호출 가능하도록
    // 함수 표현식 선언식
    const formatNumber = (number) => {
      return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const isOperator = (value) => {
      // filter findIndex find 케이스
      const arr = ["+", "-", "×", "÷"];
      if (arr.find((item) => item === value) !== undefined) {
        return true;
      } else {
        return false;
      }
      //return ["+", "-", "×", "÷"].includes(value);
    };
    const isOperator2 = (value) => {
      // filter findIndex find 케이스
      const arr = ["+", "-", "×", "÷"];
      if (arr.findIndex((item) => item === value) !== -1) {
        return true;
      } else {
        return false;
      }
      //return ["+", "-", "×", "÷"].includes(value);
    };

    const isOperator3 = (value) => {
      // filter findIndex find 케이스
      const arr = ["+", "-", "×", "÷"];
      if (arr.filter((item) => item == value).length !== 0) {
        return true;
      } else {
        return false;
      }
      //return ["+", "-", "×", "÷"].includes(value);
    };
    const isOperator4 = (value) => {
      // filter findIndex find 케이스
      const arr = ["+", "-", "×", "÷"];
      if (arr.filter((item) => item == value) == []) {
        return false;
      } else {
        return true;
      }
    };
    //return ["+", "-", "×", "÷"].includes(value);
    // }
    const calculation = (num1, operator, num2) => {
      if (operator === "+") {
        return num1 + num2;
      } else if (operator === "-") {
        return num1 - num2;
      } else if (operator === "×") {
        return num1 * num2;
      } else if (operator === "÷") {
        return num1 / num2;
      }
    };
  });
};

// if/switch 서로 다른점
/*
    const calculation = (accumulator,currrentValue, index, array) => {
        const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const initialValue = 0;
        if (operator === "+") {
          arr1.reduce((accumulator, currentValue) => num1 + num2, initialValue);
        }
      };
  */
