import { click } from "./click.js";
import { totalArray, calculateArray, numberArray } from "./simple.js";
import { totalData } from "./simple.js";

document.addEventListener("keydown", simple1);
//콜백함수공부
// 엔터
export function simple1(e) {
  e.preventDefault();
  let clickedValue1 = e.key;
  console.log(e.key);
  if (/^[가-힣]+$/.test(clickedValue1) || /^[a-zA-Z]+$/.test(clickedValue1)) {
    //한글영어 정규표현식

    return;

    //말고딴거 하나 어떤경우사용!
  }

  let type;

  if (!isNaN(clickedValue1)) {
    type = "number";
  } else {
    type = "string";
  }

  let totalData1 = {
    value: clickedValue1,
    type: type,
    no: totalArray.length,
  };

  totalData1 = {
    value: clickedValue1,
    type: type,
    no: totalArray.length,
  };
  click(clickedValue1, totalData1);
}
//axios
