import { click } from "./click.js";
import { totalArray } from "./simple.js";
import { totalData } from "./simple.js";

document.addEventListener("keydown", simple1);
export function simple1(e) {
  let clickedValue1 = e.key;
  click(clickedValue1);
  console.log(e);
  let type;

  if (!isNaN(clickedValue1)) {
    type = "number";
  } else {
    type = "string";
  }
  e.preventDefault();
  console.log(clickedValue1);

  totalData = {
    value: clickedValue1,
    type: type,
    no: totalArray.length,
  };
  console.log(totalData);
}
