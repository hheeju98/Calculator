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
export function simple(e, arr) {
  console.log(arr); //이름나오게(arr)
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
  click(clickedValue, totalData);
}
