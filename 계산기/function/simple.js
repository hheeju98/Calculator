import { click } from "./click.js";
const totalArray = [];
const numberArray = [];
const calculateArray = [];
export { totalArray, numberArray, calculateArray };
export let totalData = {
  value: "",
  type: "",
  no: "",
};
export function simple(e) {
  const clickedValue = e.target.innerText;

  let type;

  if (!isNaN(clickedValue)) {
    type = "number";
  } else {
    type = "string";
  }

  totalData = {
    value: clickedValue,
    type: type,
    no: totalArray.length,
  };
  click(clickedValue);
  console.log(totalData);
}
