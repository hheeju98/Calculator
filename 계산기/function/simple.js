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

export function simple(e, name) {
  const clickedValue = e.target.innerText;
  console.log(name);
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
