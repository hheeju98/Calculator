import { click } from "./click.js";
import { totalArray, calculateArray, numberArray } from "./simple.js";
import { totalData } from "./simple.js";

document.addEventListener("keydown", simple1);

export function simple1(e) {
  let clickedValue1 = e.key;
  console.log(e.key);
  if (/^[가-힣]+$/.test(clickedValue1)) {
    e.preventDefault();
    return;
  } else if (/^[a-zA-Z]+$/.test(clickedValue1)) {
    e.preventDefault();
    return;
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
  e.preventDefault();

  totalData1 = {
    value: clickedValue1,
    type: type,
    no: totalArray.length,
  };
  click(clickedValue1, totalData1);
  e.preventDefault();
}
